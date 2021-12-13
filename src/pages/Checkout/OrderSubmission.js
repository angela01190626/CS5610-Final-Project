import React, {Component} from 'react';
import "./Checkout.css";
import {Link} from "react-router-dom";
import cart from "../../assets/shopping_cart.png";
import CartTable from "../../components/Cart/CartTable";
import Layout from "../../components/Layout/Layout";

class OrderSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderMainContent() {
        return (
            <div className="empty-cart-container">
                <div className="heading-text">
                    Your order has been placed successfully.
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

    render() {
        return (
            <div>
                <Layout
                    main={this.renderMainContent()}
                />
            </div>
        )
    }
}

export default OrderSubmission;