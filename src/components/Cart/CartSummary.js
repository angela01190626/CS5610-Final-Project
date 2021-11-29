import React, { Component } from 'react';
import {withRouter} from "react-router";


class CartSummary extends Component {
    constructor(props) {
        super(props);

    }

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
        const {buttonText} = this.props;


        return(
            <div className="non-empty-cart-container">
                <div className="cart-summary-header">Summary</div>
                <div className="cart-summary-list">
                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Subtotal</div>
                        <div className="cart-summary-list-item-value">${totalCost}</div>
                    </div>
                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Discount</div>
                        <div className="cart-summary-list-item-value">$1</div>
                    </div>
                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Taxes</div>
                        <div className="cart-summary-list-item-value">${totalTax}</div>
                    </div>
                    <div className="cart-summary-list-items">
                        <div className="cart-summary-list-item-name">Total</div>
                        <div className="cart-summary-list-item-value">${(parseFloat(totalCost) + parseFloat(totalTax)).toFixed(2)}</div>
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

export default withRouter(CartSummary);