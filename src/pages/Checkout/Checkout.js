import React, {Component} from 'react';
import {connect} from "react-redux";

import CheckoutComponent from "./CheckoutComponent";
import "./Checkout.css";


import {getUserData} from "../../actions/userAction";
import {addItemToCart, removeItemFromCart} from "../../actions/cartAction";
import {clearCartData} from "../../actions/cartAction";

import CartSummary from "../../components/Cart/CartSummary";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {Link, withRouter} from "react-router-dom";
import {newOrder} from "../../services/orderService";
import {Modal} from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import cart from "../../assets/shopping_cart.png";

class Checkout extends Component {

    constructor() {
        super();
        this.state = {
            errorMsg: ""
        }
    }

    removeItem(item) {
        const {removeItemFromCart} = this.props;
        removeItemFromCart({...item, quantity: item.quantity});
    }

    addItem(item) {
        const {addItemToCart} = this.props;
        addItemToCart({...item, quantity: item.quantity});

    }


    onButtonClick() {
        const {history} = this.props;

        const {cart: {products, cartValue}, user} = this.props;

        const IsDeliveryAddressAdded = user.deliveryAddress1 ? true : false;
        const IsCardNumberAdded = user.cardNumber ? true : false;

        if (IsDeliveryAddressAdded && IsCardNumberAdded) {
            const today = new Date();

            const deliveryDate = new Date(today);
            const deliveryDays = (user && user.isPaidMember) ? 5 : 10;
            deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);

            const order = {
                emailAddress: user.emailAddress,
                orderStatus: 'Shipped',
                orderDate: today,
                estimatedDeliveryDate: deliveryDate,
                orderPrice: cartValue,
                paymentType: 'Card',
                orderItems:
                    (products && products.length > 0) && (
                        products.map((item, index) => (
                            {
                                itemName: item.name,
                                quantity: item.quantity,
                                itemPrice: parseInt(item.cost.replace(/,/g, '')),
                                productId: item.id,
                                prodImg: item.prodImg,
                                rating: item.rating
                            }
                        )))

            };

            newOrder(order).then((response) => {
                this.props.clearCartData();
                history.push({
                    pathname: "/orderSubmitted"
                });

            }).catch((error) => {
                console.error(error); //todo: handle exception
            });

        } else if (!IsDeliveryAddressAdded) {
            this.setState({
                errorMsg: "Please add Delivery Address to continue"
            })
        } else if (!IsCardNumberAdded) {
            this.setState({
                errorMsg: "Please add Card number to continue"
            })
        }
    }

    renderEmptyCart() {
        return (
            <div className="empty-cart-container">
                <div className="heading-text">
                    Your cart is empty
                </div>
                <div className="sub-heading-text">
                    Check out what we're featuring now!
                </div>
                <Link to="/home">
                    <div className="go-hp-btn">
                        Go to Homepage
                    </div>
                </Link>
                <img src={cart} className="cart-icon" alt="cart-icon"></img>

            </div>
        );
    }

    renderMainContent() {
        const {cart: {products}, user} = this.props;
        const {errorMsg} = this.state;
        return (
            products.length > 0 ? (
            <div className="row mt-2">
                <div className="col-12 col-xl-8">
                    <div className='checkout'>
                        <div className='checkout-container'>

                            <h2>
                                Checkout (
                                <Link to="/cart">{products.length} items)</Link>
                            </h2>
                            {errorMsg.toString() ? (
                                <div className='checkout_section'>
                                    <div className="checkout-error">{errorMsg.toString()}</div>
                                </div>
                            ) : null}
                            <CheckoutComponent user={user} products={products}
                                               addItemToCart={(item) => this.addItem(item)}
                                               removeItemFromCart={(item) => this.removeItem(item)}/>
                        </div>
                    </div>
                </div>
                <div className=".d-none .d-xl-block col-xl-4">
                    <CartSummary products={products} buttonText={'Order Now'}
                                 onButtonClick={() => this.onButtonClick()}/>
                </div>
            </div>
            ) : (
                this.renderEmptyCart()
            )
        )
    }

    onModalClose() {
        this.setState({
            errorMsg: ""
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row nav-bar">
                    <NavBar/>
                </div>
                <div className="row root-content">
                    {this.renderMainContent()}
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    getUserData: item => dispatch(getUserData(item)),
    clearCartData: item => dispatch(clearCartData(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));
