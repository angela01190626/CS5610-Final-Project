import React, {Component} from "react";
import './Order.css';
import {Button} from "@mui/material";

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin: true
        }
    }

    renderCartItems() {
        return (
            <div className="cart-tem-section-root" >
                <div className="product-description">
                    <div className="product-description-brand">
                        {"Apple"}
                    </div>
                    <div className="product-description-item">
                        {"Macbook Air"}
                    </div>
                </div>
                <div className="product-quantity-price">
                    <div className="prod-price">$323</div>
                </div>
            </div>
        )
    }
    render() {
        const { admin } = this.state;
        const order = {
            orderId: "",
            orderItems: [
                {
                    itemName: "Macbook Air",
                    itemPrice: 200,
                    quantity: 1,
                    productId: "1124123AS"
                },
                {
                    itemName: "iPhone Pro",
                    itemPrice: 1200,
                    quantity: 1,
                    productId: "CSD12312"
                }
            ]
        }
        return(
            <div className="order-root">
                <div className="order-header" >
                    <div className="col">
                        <b>Order Placed:</b> Jan 02 2022
                    </div>

                    <div className="col">
                        <b>Order Value:</b> $545
                    </div>

                    <div className="col">
                        <b>Order Id:</b> 312vty7y21b38-u88
                    </div>
                </div>

                <div className="order-details">
                    <div className={"order-status"}>
                        <b>ORDERED</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>Delivery Date: </b> Jan 15 2022
                        <br/><br/>
                        <div className={"order-item row"}>
                            <div className={"col"}>
                                <b>Item Name: </b>
                            </div>
                            <div className={"col"}>
                                <b>Item Name: </b>
                            </div>
                            <div className={"col"}>
                                <b>Item Name: </b>
                            </div>
                            <div className={"col"}>
                                <b>Item Name: </b>
                            </div>
                        </div>
                        {order.orderItems.map(item => (
                            <div className={"order-item row"}>
                                <div className={"col"}>
                                    {item.itemName}
                                </div>
                                <div className={"col"}>
                                    {item.productId}
                                </div>
                                <div className={"col"}>
                                    {item.itemPrice}
                                </div>
                                <div className={"col"}>
                                    {item.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="order-footer" >
                {
                    admin ? (
                        <span>
                            <Button variant="contained" className={"status-btn-col-gap"}>ORDERED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>SHIPPED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>DELIVERED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>RETURNED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>CANCELLED</Button>
                        </span>
                    ) : (
                        <div>
                            <Button variant="contained" className={"status-btn-col-gap"}>Cancel Order</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>Return</Button>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}
export default Order;