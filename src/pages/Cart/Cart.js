import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import cart from "../../assets/shopping_cart.png";
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../actions/cartAction'
import './Cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCost: 10.78,
            numItems: 24,
            cart: props.cart
        }
    }

    renderEmptyCart() {
        return(
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

    removeItem(item) {
        const { removeItemFromCart } = this.props;
        removeItemFromCart({...item, quantity: item.quantity});
    }

    addItem(item) {
        const { addItemToCart } = this.props;
        addItemToCart({...item, quantity: item.quantity});
        
    }

    renderItem(item, index) {
        const itemCost = parseInt(item.cost.replace(/,/g, ''));
        return(
            <div className="cart-tem-section-root" key={index}>
                <div className="cart-product-image-container">
                    <img src={item.prodImg} className="cart-prod-image" alt="product"/>
                </div>
                <div className="product-description">
                    <div className="product-description-brand">
                        {item.brandName}
                    </div>
                    <div className="product-description-item">
                        {item.name}
                    </div>
                </div>
                <div className="product-quantity-price">
                    <div className="prod-quantity">
                        <div className="prod-quantity-component-container">
                            <i className="fas fa-minus-circle" onClick={() => this.removeItem(item)}></i>
                            <div className="added-quantity">{item.quantity}</div>
                            <i className="fas fa-plus-circle" onClick={() => this.addItem(item)}></i>
                        </div>
                    </div>
                    <div className="prod-price">$ {(itemCost*item.quantity).toFixed(2)}</div>
                </div>
                <div className="product-remove">
                    <i className="far fa-trash-alt cart-item-remove-icon"></i>
                </div>
            </div>
        )
    }

    renderCartTable() {
        const { cart: { products } } = this.props;
        // const { cartCost, numItems } = this.state;
        const totalCost = this.calculateCartTotal().toFixed(2);
        const numItems = this.calculateNumItems();
        return(
            <div className="non-empty-cart-container"> 
                <div className="cart-header">
                    Cart: ${totalCost} ({numItems} Items)
                </div>
                {
                        products.map((item, index) => (
                            this.renderItem(item, index)
                        ))
                    }
            </div>
        );
    }

    calculateCartTotal() {
        const { cart: { products } } = this.props;
        let totalValue = products.reduce((acc, curr) => {
            const itemCost = parseInt(curr.cost.replace(/,/g, ''));
            return acc + (itemCost * curr.quantity)
        }, 0)
        return totalValue;
    }

    calculateNumItems() {
        const { cart: { products } } = this.props;
        let num = products.reduce((acc, curr) => {
            return acc + curr.quantity
        }, 0)
        return num;
    }

    calculateTax(cartValue) {
        return cartValue * 0.05;
    }

    renderCartSummary() {
        const totalCost = this.calculateCartTotal().toFixed(2);
        const totalTax = this.calculateTax(totalCost).toFixed(2);
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
                <Link to="/home">
                    <div className="checkout-btn">
                        Checkout
                    </div>
                </Link>
            </div>
        );
    }

    renderMainContent() {
        const { cart: { products } } = this.props;
        return (
            products.length > 0 ? (
            <div className="cart-main-root">
            <div className="cart-item">
                {this.renderCartTable()}
            </div>
            <div className="cart-empty-space-in-between"></div>
            <div className="cart-bill-summary">
                {this.renderCartSummary()}
            </div>
            </div>
            ) : (
                this.renderEmptyCart()
            )
                
        )
    }
    
    render() {
        return(
            <div>
                <Layout
                    main={this.renderMainContent()}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
});
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);