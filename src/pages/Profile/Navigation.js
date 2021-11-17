import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <div className="list-group">
                    <Link to="/orders" className="list-group-item">
                        <i className="fas fa-box"/>
                        Your orders
                    </Link>
                    <Link to="/profile" className="list-group-item">
                        <i className="fas fa-cog"/>
                            Your account settings
                    </Link>
                    <Link to="/address" className="list-group-item">
                        <i className="fa fa-address-book"/>
                            Addresses
                    </Link>
                    <Link to="/payment" className="list-group-item">
                        <i className="far fa-credit-card"/>
                            Payment methods
                    </Link>
                    <Link to="/notifications" className="list-group-item">
                        <i className="fa fa-bell"/>
                        Notifications
                    </Link>
                    <Link to="/" className="list-group-item">
                        <i className="fas fa-sign-out-alt"/>
                            Log out
                    </Link>
                </div>
            </>
        )
    }

}


export default Navigation;