import React, { Component } from "react";
import Navigation from "./Navigation";
import AddressSetting from "./AddressSetting";
import Layout from "../../components/Layout/Layout";

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderLeftContent() {
        return(
            <>
                <Navigation active="address"/>
            </>
        )
    }

    renderMainContent() {
        return(
            <>
                <h2>My addresses</h2>
                <AddressSetting/>
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

export default Address;