import React, { Component } from "react";
import Navigation from "./Navigation";
// import NavBar from "../../components/NavBar/NavBar";
import PaymentSetting from "./PaymentSetting";
// import AccountSetting from "./AccountSetting";
import Layout from "../../components/Layout/Layout";

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderLeftContent() {
        return(
            <>
                <Navigation active="payment"/>
            </>
        )
    }

    renderMainContent() {
        return(
            <>
                <PaymentSetting/>
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

export default Payment;