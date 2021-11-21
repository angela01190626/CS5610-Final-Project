import React, { Component } from "react";
import Navigation from "./Navigation";
import Layout from "../../components/Layout/Layout";
import NotificationSettings from "./NotificationSettings";

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderLeftContent() {
        return(
            <>
                <Navigation/>
            </>
        )
    }

    renderMainContent() {
        return(
            <>
                <NotificationSettings/>
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

export default Notifications;