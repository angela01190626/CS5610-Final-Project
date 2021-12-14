import React, { Component } from "react";
import Navigation from "./Navigation";
import Layout from "../../components/Layout/Layout";
import Order from "../../components/Order/Order"
import axios from "axios";
import urls from "../../config/url";
import {connect} from "react-redux";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allOrders: []
        }
    }

    componentDidMount() {
        this.fetchAllOrders();
    }

    renderLeftContent() {
        const { user } = this.props;
        const admin = user && user.isAdmin;
        return(
            <>
                <Navigation active="orders" isAdmin={admin}/>
            </>
        )
    }

    getOrders() {
        const { user } = this.props;
        const {allOrders} = this.state;
        const admin = user && user.isAdmin;
        return(
            allOrders.map(order => (
                <Order order={order} admin={admin}/>
            ))
        )
    }

    renderMainContent() {
        return(
            <>
                <div className="review-container">
                    <div className="rc-header">Orders</div>
                    <div className="rc-table">
                        <div className="rc-review">
                            {this.getOrders()}
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
        axios.request(req).then(res => {
            this.setState({
                allOrders: res.data
            })
        })
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Orders);