import React, { Component } from "react";
import Navigation from "./Navigation";
import AccountSetting from "./AccountSetting";
import Layout from "../../components/Layout/Layout";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
                <AccountSetting/>
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
export default Profile;
