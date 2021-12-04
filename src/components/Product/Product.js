import { Rating } from "@mui/material";
import React, {Component} from "react";
// import {useState} from "react";
import {withRouter, Link} from "react-router-dom";
// import {Route} from "react-router-dom";
import "./Product.css";
// import {useHistory} from "react-router";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity ? this.props.quantity : 0,
            productInfo: {
                id: this.props.id,
                name: this.props.itemName,
                prodImg: this.props.prodImg,
                cost: this.props.cost,
                originalPrice: this.props.originalPrice,
                rating: this.props.rating
            }
        }
    }

    addItem() {
        this.setState({
            quantity: this.state.quantity+1
        }, () => {
            this.props.onProductAddClick(this.state.productInfo, this.state.quantity);
        });
    }

    removeItem() {
        this.setState({
            quantity: this.state.quantity-1
        }, () => {
            this.props.onProductRemove(this.state.productInfo, this.state.quantity);
        });
    }

    onClickImage() {
        const { history } = this.props;

        history.push({
            pathname:  "/details",
            search: `?id=${this.props.itemName}`
        });
    }

    render() {
        const imgStyle = {
            backgroundImage: `url(${this.props.prodImg})`
        }
        return(
            <div className="product-root">
            <Link to = {`/details/${this.props.id}`}>
                <div className="product-image">

                <div style={imgStyle} className="prod-component-image"/>
                </div>
            </Link>
            <div className="product-price">
                ${this.props.cost} {this.props.cost !== this.props.originalPrice && (<span className="original-price">{this.props.originalPrice}</span>)}
            </div>
            {
                this.state.quantity === 0 ? (
                    <div className="product-component-add-button" onClick={() => this.addItem()}>Add</div>
                ) : (
                    <div className="product-component-add-button">
                        <i className="fas fa-minus-circle" onClick={() => this.removeItem()}/>
                            <div className="added-quantity">{this.state.quantity}</div>
                        <i className="fas fa-plus-circle" onClick={() => this.addItem()}/>
                    </div>
                )
            }
            <div className="product-name">{this.props.itemName}</div>
            <div className="product-rating"><Rating name="size-small" readOnly value={this.props.rating} size="small" /></div>
        </div>
        )
    }
}
export default withRouter(Product);