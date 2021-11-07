import { Rating } from "@mui/material";
import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }
    addItem() {
        this.setState({
            quantity: this.state.quantity+1
        });
    }

    removeItem() {
        this.setState({
            quantity: this.state.quantity-1
        });
    }
    render() {
        return(
            <div className="product-root">
            <div className="product-image">
                <img src="" />
            </div>
            <div className="product-price">
                ${this.props.cost} {this.props.cost != this.props.originalPrice && (<span className="original-price">${this.props.originalPrice}</span>)}
            </div>
            {
                this.state.quantity === 0 ? (
                    <div className="add-button" onClick={() => this.addItem()}>Add</div>
                ) : (
                    <div className="add-button">
                        <i class="fas fa-minus-circle" onClick={() => this.removeItem()}></i>
                            <div className="added-quantity">{this.state.quantity}</div>
                        <i class="fas fa-plus-circle" onClick={() => this.addItem()}></i>
                    </div>
                )
            }
            <div className="product-name">{this.props.itemName}</div>
            <div className="product-rating"><Rating name="size-small" readOnly value={this.props.rating} size="small" /></div>
        </div>
        )
    }
}
export default Product;