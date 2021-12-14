import React, { Component } from "react";
import Navigation from "./Navigation";
// import NavBar from "../../components/NavBar/NavBar";
import PaymentSetting from "./PaymentSetting";
// import AccountSetting from "./AccountSetting";
import Layout from "../../components/Layout/Layout";
import urls, {PROFILE_API} from "../../config/url";
import axios from "axios";
import {getUserData} from "../../actions/userAction";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile:{}
        }
    }

    // componentDidMount() {
    //     const { profile } = this.state;
    //     if(Object.keys(profile).length === 0) {
    //         this.fetchProfile();
    //     }
    // }
    //
    // fetchProfile = async () => {
    //     const { isLoading } = this.props;
    //     let profileId = 'alice@gmail.com';
    //     axios.request(`${PROFILE_API}${profileId}`).then((response) => {
    //         console.log("Response: ", response.data);
    //         this.setState({
    //             profile: response.data || {}
    //         })
    //     }).catch((error) => {
    //         console.error(error); //todo: handle exception
    //     });
    // }

    renderLeftContent() {
        return(
            <>
                <Navigation active="payment"/>
            </>
        )
    }

    renderMainContent() {
        const {user} = this.props;
        return(
            <>
                <PaymentSetting user={user}/>
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

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    getUserData: item => dispatch(getUserData(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment));