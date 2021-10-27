import React, {Component} from "react";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-box"/>
                                Your orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-cog"/>
                            Your account settings
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-address-book"/>
                            Addresses
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="far fa-credit-card"/>
                            Payment methods
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-bell"/>
                            Notifications
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-sign-out-alt"/>
                            Log out
                        </a>
                    </li>
                </ul>
            </>
        )
    }

}


export default Navigation;