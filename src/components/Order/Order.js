import React, {Component} from "react";
import './Order.css';
import {Button} from "@mui/material";
import axios from "axios";
import urls from "../../config/url";

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admin: true
        }
    }

    render() {
        const { order, admin } = this.props;
        const deliveryDate = new Date(order.estimatedDeliveryDate);
        const orderDate = new Date(order.orderDate);
        const orderDatePlusReturnWindow = new Date();
        orderDatePlusReturnWindow.setDate(deliveryDate.getDate() + 15); //TODO: check this
        console.log("------: ", deliveryDate + "---------" + orderDatePlusReturnWindow);
        const disableCancelReturn = new Date() > orderDatePlusReturnWindow;
        return(
            <div className="order-root">
                <div className="order-header" >
                    <div className="col">
                        <b>Order Placed:</b> {orderDate.toLocaleDateString()}
                    </div>

                    <div className="col">
                        <b>Order Value:</b> ${order.orderPrice}
                    </div>

                    <div className="col">
                        <b>Order Id:</b> {order._id}
                    </div>
                </div>

                <div className="order-details">
                    <div className={"order-status"}>
                        <h4><b>{order.orderStatus.toUpperCase()}</b></h4>
                        <b>Delivery Date: </b>
                        {deliveryDate.toLocaleDateString()}
                        <br/><br/>
                        <div className={"order-item row"}>
                            <div className={"col"}>
                                <b>Item Name: </b>
                            </div>
                            <div className={"col"}>
                                <b>Item Id: </b>
                            </div>
                            <div className={"col"}>
                                <b>Item Cost: </b>
                            </div>
                            <div className={"col"}>
                                <b>Quantity: </b>
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
                                <br/><br/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="order-footer" >
                {
                    admin ? (
                        <span onClick={(e) => this.delegateAdminAction(e)}>
                            <Button variant="contained" className={"status-btn-col-gap"}>ORDERED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>SHIPPED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>DELIVERED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>RETURNED</Button>
                            <Button variant="contained" className={"status-btn-col-gap"}>CANCELLED</Button>
                        </span>
                    ) : (
                        <div onClick={(e) => this.delegateAdminAction(e)}>
                            <Button variant="contained" className={"status-btn-col-gap"} disabled={disableCancelReturn}>Cancel Order</Button>
                            <Button variant="contained" className={"status-btn-col-gap"} disabled={disableCancelReturn}>Return</Button>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }

    delegateAdminAction(e) {
        const {order} = this.props;
        let newObj = JSON.parse(JSON.stringify(order))
        newObj = {
            ...newObj,
            orderStatus: e.target.innerText
        }
        console.log("HHHHHH: ", newObj);
        let request = JSON.parse(JSON.stringify(urls.updateOrderStatus));
        request.url = request.url.replace("{order-id}", newObj._id);
        axios.put(request.url, {
                ...newObj
        }).then((response) => {
            console.log("Status changed.....", response.data)
        }).catch((error) => {
            console.error(error); //todo: handle exception
        });
    }
}
export default Order;