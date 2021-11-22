import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import offer from "../../config/offer.json";
import "./detail.css";
import {Rating} from "@mui/material";

class ProductDetail extends Component {
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


    renderLeftContent() {
        return(
            <>

            </>
        )
    }

    renderMainContent() {
        const prod = offer.find(i => i.id === parseInt(this.props.match.params.productId));
        return (
            <>
                {/*{JSON.stringify(prod)}*/}
                <div className="row">
                    <div className ="col-6 p-2 center-image">
                        <img className="prod-image" src = {prod.prodImg}/>
                    </div>
                    <div className="detail-border col-6 p-2">
                        <b><span className="product-align-left p-1">{prod.itemName}</span></b>
                        <div className="product-align-left p-1"><Rating className="pe-1" name="size-small" readOnly value={prod.rating} size="small"/>({prod.rating})<u className="ps-1">{prod.reviews} reviews</u></div>
                        <br/>
                        <div className="product-price p-1">
                            ${prod.cost} {prod.cost !== prod.originalPrice && (<span className="original-price">${prod.originalPrice}</span>)}
                        </div>
                        <br/>
                        <br/>
                        {
                            this.state.quantity === 0 ? (
                                <div className="add-button" onClick={() => this.addItem()}>Add to cart</div>
                            ) : (
                                <div className="add-button">
                                    <i className="fas fa-minus-circle" onClick={() => this.removeItem()}/>
                                    <div className="added-quantity">{this.state.quantity}</div>
                                    <i className="fas fa-plus-circle" onClick={() => this.addItem()}/>
                                </div>
                            )
                        }
                        </div>
                </div>


                <div className="p-1">
                    <b>About this item</b>
                    <hr/>
                    <div className="ms-3">
                        Product details

                        <p className="detail-para">
                            <b>{prod.detail}</b>
                        </p>
                    </div>
                </div>


            </>
        )
    }

    renderRightContent() {
        return(
            <>
            </>
        )
    }

    render() {
        return(
            <div className="container-fluid">
                <Layout
                    left={this.renderLeftContent()}
                    main={this.renderMainContent()}
                    right={this.renderRightContent()}
                />
            </div>
        )
    }
}

export default ProductDetail;