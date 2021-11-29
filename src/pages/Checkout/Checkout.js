import React, {Component} from 'react';
import {connect} from "react-redux";

import CheckoutComponent from "./CheckoutComponent";
import "./Checkout.css";


import {getUserData} from "../../actions/userAction";
import {addItemToCart, removeItemFromCart} from "../../actions/cartAction";


import CartSummary from "../../components/Cart/CartSummary";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

class Checkout extends Component {
    constructor(props) {
        super(props);

    }

    removeItem(item) {
        const { removeItemFromCart } = this.props;
        removeItemFromCart({...item, quantity: item.quantity});
    }

    addItem(item) {
        const { addItemToCart } = this.props;
        addItemToCart({...item, quantity: item.quantity});

    }

    onButtonClick(){
        const {history} = this.props;

        history.push({
            pathname:  "/home"
        });
    }

    renderMainContent() {
        const {cart: {products}, user} = this.props;

        return (

            <div className="row mt-2">
                <div className="col-8">
                    <CheckoutComponent user={user} products={products} onAddClick={(item) => this.addItem(item)} onRemoveClick={(item) => this.removeItem(item)}/>
                </div>
                <div className="col-4">
                    <CartSummary products={products} buttonText={'Order Now'} onButtonClick={ () => this.onButtonClick()}/>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row nav-bar">
                    <NavBar />
                </div>
                <div className="row root-content">
                    {this.renderMainContent()}
                </div>
                <div className="row">
                    <Footer />
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
    getUserData: item => dispatch(getUserData(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
