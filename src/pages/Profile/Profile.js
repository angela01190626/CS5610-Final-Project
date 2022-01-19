import React, { Component } from "react";
import Navigation from "./Navigation";
import AccountSetting from "./AccountSetting";
import Layout from "../../components/Layout/Layout";
import urls from "../../config/url";
import axios from "axios";
import {getUserData} from "../../actions/userAction";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import isLoading from "../../actions/appAction";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile:{}
        }
    }


    renderLeftContent() {
        const { user } = this.props;
        const admin = user && user.isAdmin;
        const paidMember = user && user.isPaidMember;
        return(
           <>
                <Navigation active="profile"
                            isAdmin={admin}
                            isPaidMember={paidMember}
                />
           </>
        )
    }

    renderMainContent() {
        let {user} = this.props;
        console.log(user)

        return(
            <>
                {/*{JSON.stringify(user)}*/}
                <AccountSetting user={user}/>
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
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    getUserData: item => dispatch(getUserData(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
