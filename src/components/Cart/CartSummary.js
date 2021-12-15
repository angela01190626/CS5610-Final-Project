import React, { Component } from 'react';
import {withRouter} from "react-router";
import { connect } from "react-redux";

class CartSummary extends Component {

    calculateCartTotal() {
        const { products } = this.props;
        let totalValue = products.reduce((acc, curr) => {
            const itemCost = parseInt(curr.cost.replace(/,/g, ''));
            return acc + (itemCost * curr.quantity)
        }, 0)
        return totalValue;
    }

    calculateTax(cartValue) {
        return cartValue * 0.05;
    }

    onButtonClick(){
        const {onButtonClick} = this.props;
        onButtonClick();
    }

    renderCartSummary() {
        const totalCost = this.calculateCartTotal().toFixed(2);
        const totalTax = this.calculateTax(totalCost).toFixed(2);
        const {buttonText, user} = this.props;

        const subscribed = user && user.isPaidMember;
        const deliveryCharge = subscribed ? 0 : 10;
        return(
            <div className="non-empty-cart-container-2">
                <div className="cart-summary-header">Summary</div>
                <div className="cart-summary-list">
                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Subtotal</div>
                        <div className="cart-summary-list-item-value">${totalCost}</div>
                    </div>

                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Delivery charges</div>
                        <div className="cart-summary-list-item-value">${deliveryCharge}</div>
                    </div>
                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Taxes</div>
                        <div className="cart-summary-list-item-value">${totalTax}</div>
                    </div>
                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Total</div>
                        <div className="cart-summary-list-item-value">${(parseFloat(totalCost) + parseFloat(deliveryCharge) + parseFloat(totalTax)).toFixed(2)}</div>
                    </div>
                </div>

                    <div className="checkout-btn" onClick={ ()=> this.onButtonClick()}>
                        {buttonText}
                    </div>

            </div>
        );
    }

    render() {
        return(
            this.renderCartSummary()
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(withRouter(CartSummary));