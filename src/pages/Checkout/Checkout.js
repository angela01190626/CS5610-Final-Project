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
import { withRouter} from "react-router-dom";
import {newOrder} from "../../services/orderService";
import {Modal} from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

        const {cart: {products}, user} = this.props;

        const IsDeliveryAddressAdded = user.deliveryAddress1 ? true : false;
        const IsCardNumberAdded = user.cardNumber ? true : false;

        if(IsDeliveryAddressAdded && IsCardNumberAdded) {
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
                console.log("Response: ", response.data);
            }).catch((error) => {
                console.error(error); //todo: handle exception
            });


            if (user && Object.keys(user).length > 0) {
                history.push({
                    pathname: "/orderSubmitted"
                });
            } else {
                history.push({
                    pathname: "/login"
                });
            }
        }
        else if(!IsDeliveryAddressAdded)
        {
            this.setState({
                errorMsg: "Please add Delivery Address to continue"
            })
        }
        else if(!IsCardNumberAdded)
        {
            this.setState({
                errorMsg: "Please add Card number to continue"
            })
        }
    }


    renderMainContent() {
        const {cart: {products}, user} = this.props;

        return (

            <div className="row mt-2">
                <div className="col-12 col-xl-8">
                    <CheckoutComponent user={user} products={products} addItemToCart={(item) => this.addItem(item)}
                                       removeItemFromCart={(item) => this.removeItem(item)}/>
                </div>
                <div className=".d-none .d-xl-block col-xl-4">
                    <CartSummary products={products} buttonText={'Order Now'}
                                 onButtonClick={() => this.onButtonClick()}/>
                </div>
            </div>

        )
    }

    onModalClose() {
        this.setState({
                          errorMsg: ""
                      })
    }

    render() {
        const { errorMsg } = this.state;
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };
        return (
            <div className="container-fluid">
                <div className="row nav-bar">
                    <NavBar/>
                </div>
                <div className="row root-content">
                    <Modal
                        open={errorMsg && errorMsg.trim() !== ""}
                        onClose={() => this.onModalClose()}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Action Required
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {errorMsg}
                            </Typography>
                        </Box>
                    </Modal>
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
