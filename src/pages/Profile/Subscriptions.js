import React, { Component } from "react";
import Navigation from "./Navigation";
import Layout from "../../components/Layout/Layout";
import SubscriptionSettings from "./SubscriptionSettings";

class Subscriptions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderLeftContent() {
        return(
            <>
                <Navigation active="notifications"/>
            </>
        )
    }

    renderMainContent() {
        return(
            <>
                <SubscriptionSettings/>
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

export default Subscriptions;