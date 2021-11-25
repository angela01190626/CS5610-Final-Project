import React, {Component} from 'react';
import {connect, useSelector} from "react-redux";

import CheckoutComponent from "./CheckoutComponent";
import "./Checkout.css";
import Layout from "../../components/Layout/Layout";
import cart from "../../assets/shopping_cart.png";
import CheckoutSummary from "./CheckoutSummary";
import {getUserData} from "../../actions/userAction";
import {addItemToCart, removeItemFromCart} from "../../actions/cartAction";
import CartTable from "../../components/Cart/CartTable";
import CartSummary from "../../components/Cart/CartSummary";

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
            <div>
                <Layout
                    main={this.renderMainContent()}
                />
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
