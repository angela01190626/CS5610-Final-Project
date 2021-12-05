import React, { Component } from "react";
import Navigation from "./Navigation";
import AddressSetting from "./AddressSetting";
import Layout from "../../components/Layout/Layout";
import urls from "../../config/url";
import axios from "axios";

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile:{}
        }
    }

    componentDidMount() {
        const { profile } = this.state;
        if(Object.keys(profile).length === 0) {
            this.fetchProfile();
        }
    }

    fetchProfile = async () => {
        const { isLoading } = this.props;
        let request = urls.getProfile;
        // After log in/signup working, we will use the current user's profile
        let profileId = 'janeDoeTest123@gmail.com';
        request.url = `${request.url}${profileId}`;
        axios.request(request).then((response) => {
            console.log("Response: ", response.data);
            this.setState({
                profile: response.data || {}
            })
        }).catch((error) => {
            console.error(error); //todo: handle exception
        });
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
                <AddressSetting profile={this.state}/>
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