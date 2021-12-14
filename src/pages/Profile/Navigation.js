import React from "react";
import {Link, useHistory} from "react-router-dom";
import {logout, profile} from "../../services/profileService";

const Navigation = (
    {
        active = 'profile',
        isAdmin
    }) => {
    const history = useHistory();
    const logoutUser = e => {
        e.preventDefault();
        logout().then(res => {
            history.push('/');
        });
    }
    return (
        <>
            <div className="list-group pt-2">
                <Link to="/orders" className={`list-group-item ${active === 'orders' ? 'active' : ''}`}>
                    <i className="fas fa-box"/>
                    <span className="left-padding d-none d-xl-inline-block">
                        {isAdmin ? `Manage Orders` : 'Your Orders'}
                    </span>
                </Link>
                <Link to="/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fas fa-cog"/>
                    <span className="left-padding d-none d-xl-inline-block">
                                Your account
                            </span>
                </Link>
                <Link to="/address" className={`list-group-item ${active === 'address' ? 'active' : ''}`}>
                    <i className="fa fa-address-book"/>
                    <span className="left-padding d-none d-xl-inline-block">
                                Addresses
                            </span>
                </Link>
                <Link to="/payment" className={`list-group-item ${active === 'payment' ? 'active' : ''}`}>
                    <i className="far fa-credit-card"/>
                    <span className="left-padding d-none d-xl-inline-block">
                                Payment
                            </span>
                </Link>
                <Link to="/subscriptions" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa fa-bell"/>
                    <span className="left-padding d-none d-xl-inline-block">
                                Subscriptions
                            </span>
                </Link>
                <a className="list-group-item" onClick={logoutUser}>
                    <i className="fas fa-sign-out-alt"/>
                    <span className="left-padding d-none d-xl-inline-block">
                                Log out
                            </span>
                </a>
            </div>
        </>
    )
}


export default Navigation;