import React, { Component } from "react";
import Navigation from "./Navigation";
import Layout from "../../components/Layout/Layout";
import Order from "../../components/Order/Order"
import axios from "axios";
import urls from "../../config/url";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allOrders: []
        }
    }

    componentDidMount() {
        // this.fetchAllOrders();
    }

    renderLeftContent() {
        const isAdmin = true; //TODO
        return(
            <>
                <Navigation active="orders" isAdmin={isAdmin}/>
            </>
        )
    }

    renderMainContent() {
        const { allOrders } = this.state;
        return(
            <>
                <div className="review-container">
                    <div className="rc-header">Orders</div>
                    <div className="rc-table">
                        <div className="rc-review">
                            allOrders.map(order => (
                                <Order/>
                            ))
                        </div>
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

    fetchAllOrders() {
        const req = JSON.parse(JSON.stringify(urls.getAllOrders));
        axios.get(req).then(res => {
            console.log(res);
        })
    }
}

export default Orders;