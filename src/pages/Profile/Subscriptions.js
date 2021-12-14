import React, { Component } from "react";
import Navigation from "./Navigation";
import Layout from "../../components/Layout/Layout";
import SubscriptionSettings from "./SubscriptionSettings";
import {getUserData} from "../../actions/userAction";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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
        let {user} = this.props;
        console.log(user)
        return(
            <>
                <SubscriptionSettings user={{user}}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Subscriptions));