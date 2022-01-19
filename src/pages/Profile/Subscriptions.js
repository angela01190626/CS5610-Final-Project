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
        const { user } = this.props;
        const admin = user && user.isAdmin;
        const paidMember = user && user.isPaidMember;
        return(
            <>
                <Navigation active="notifications"
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
                <SubscriptionSettings user={user}/>
            </>
        )
    }


    render() {
        return(
            <div className="container-fluid">
                <Layout
                    left={this.renderLeftContent()}
                    main={this.renderMainContent()}

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