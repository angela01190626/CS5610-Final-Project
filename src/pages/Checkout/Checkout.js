import React, {Component} from 'react';
import {connect, useDispatch} from "react-redux";

import CheckoutComponent from "./CheckoutComponent";
import "./Checkout.css";


import {getUserData} from "../../actions/userAction";
import {addItemToCart, removeItemFromCart} from "../../actions/cartAction";
import {clearCartData} from "../../actions/cartAction";

import CartSummary from "../../components/Cart/CartSummary";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {Link, withRouter} from "react-router-dom";
import cart from "../../assets/shopping_cart.png";
import {newOrder} from "../../services/orderService";
import axios from "axios";

class Checkout extends Component {

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

        const {cart: {products}, user} = this.props;

        const today = new Date();

        const deliveryDate = new Date(today);

        deliveryDate.setDate(deliveryDate.getDate() + 6);


                const order = {
                    emailAddress: user.emailAddress,
                    orderStatus: 'Shipped',
                    orderDate: today,
                    estimatedDeliveryDate: deliveryDate,
                    orderPrice: '10', //add value
                    paymentType: 'Card',
                    orderItems: [
                        (products && products.length > 0) && (
                            products.map((item, index) => (
                                {
                                    itemName: item.name,
                                    quantity: item.quantity,
                                    itemPrice: parseInt(item.cost.replace(/,/g, '')),
                                    productId: item.id,
                                    prodImg:item.prodImg,
                                    rating: item.rating
                                }
                            )))
                    ]
                };

        newOrder(order).then((response) => {
            this.props.clearCartData();
            console.log("Response: ", response.data);
        }).catch((error) => {
            console.error(error); //todo: handle exception
        });

        console.log(order);

//On successful posting oreder

        history.push({
            pathname: "/orderSubmitted"
        });
    }


    renderMainContent() {
        const {cart: {products}, user} = this.props;

        return (

            <div className="row mt-2">
                <div className="col-8">
                    <CheckoutComponent user={user} products={products} addItemToCart={(item) => this.addItem(item)}
                                       removeItemFromCart={(item) => this.removeItem(item)}/>
                </div>
                <div className="col-4">
                    <CartSummary products={products} buttonText={'Order Now'}
                                 onButtonClick={() => this.onButtonClick()}/>
                </div>
            </div>

        )
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
