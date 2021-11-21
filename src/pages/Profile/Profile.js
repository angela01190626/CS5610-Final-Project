import React, { Component } from "react";
import Navigation from "./Navigation";
import AccountSetting from "./AccountSetting";
import NavBar from "../../components/NavBar/NavBar";
import Layout from "../../components/Layout/Layout";
import {Link} from "react-router-dom";

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
                <Link to = "/detail">Detail</Link>
            </div>
        )
    }
}
export default Profile;
