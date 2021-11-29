import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Layout from '../../components/Layout/Layout';
import cart from "../../assets/shopping_cart.png";
import {connect} from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../../actions/cartAction'
import './Cart.css';
import CartTable from "../../components/Cart/CartTable";
import CartSummary from "../../components/Cart/CartSummary";

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

        history.push({
            pathname: "/checkout"
        });
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
                <CartTable products={products}
                           onAddClick={(item) => this.addItem(item)}
                           onRemoveClick={(item) => this.removeItem(item)}/>
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
                        <CartSummary products={products} buttonText={'Checkout'}
                                     onButtonClick={() => this.onButtonClick()}/>
                    </div>
                </div>
            ) : (
                this.renderEmptyCart()
            )

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
    cart: state.cart,
});
const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);