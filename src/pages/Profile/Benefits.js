import React, { Component } from "react";
import Navigation from "./Navigation";
import Layout from "../../components/Layout/Layout";
import SubscriptionSettings from "./SubscriptionSettings";
import {getUserData} from "../../actions/userAction";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import './benefit.css'

class Benefits extends Component {
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
                <Navigation active="benefits"
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
            <div>
                <h1>Your Benefits</h1>
                <div className={"benefit-container-root"}>
                    <div className={"benefit-container"}>
                        <div className={"benefit-img"}>
                           <img src={"https://ak.picdn.net/shutterstock/videos/1011008360/thumb/6.jpg"}
                           alt={"free-del"}
                           className={"benefit-img-dimension"}/>
                        </div>
                        <div className={"benefit-desc"}>
                            <h3>Unlimited Free Deliveries!</h3>
                            As a member, you get access to unlimited free deliveries without a minimum order value.
                        </div>
                    </div>
                    <div className={"benefit-container"}>
                        <div className={"benefit-img"}>
                            <img src={"https://unblast.com/wp-content/uploads/2020/10/Fast-Delivery-Vector-Illustration.jpg"}
                                 alt={"free-del"}
                                 className={"benefit-img-dimension"}/>
                        </div>
                        <div className={"benefit-desc"}>
                            <h3>Fast Delivery!</h3>
                            As a member, you get access to unlimited fast deliveries. We try out
                            best to deliver your order within 5 working days of placing the order
                        </div>
                    </div>

                    <div className={"benefit-container"}>
                        <div className={"benefit-img"}>
                            <img src={"https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2021-06/early-prime-day-deals-1280.jpg?h=55bf7bde&itok=3ivpgT6P"}
                                 alt={"free-del"}
                                 className={"benefit-img-dimension"}/>
                        </div>
                        <div className={"benefit-desc"}>
                            <h3>Early access to Hot Deals!</h3>
                            As a member, you get early access to hot deals. This includes Black friday deals,
                            St. Patrick Day deals, Christmas deals and many more..
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Benefits));