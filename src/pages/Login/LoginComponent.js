import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    demoOnClick(e) {
        this.props.history.push("/das");
    }

    render() {
        return (
            <>
                <div className="mt-4">
                    <div className="login-text-center">
                        <Link to="/">
                            <i className="fas fa-shopping-basket trademark-icon"></i>
                        </Link>
                        <h1 className="fs-5 mt-4 fw-bold">
                            Sign in to your Wallcart account
                        </h1>
                    </div>

                    <div className="login-sign-in-widget mx-5">
                        <form className="login-form-box">
                            <div>
                                <div>
                                    <div className="login-form-field mt-4">
                                        <input type="email"
                                               id="email"
                                               name="email"
                                               placeholder="Email address"
                                               required=""
                                               autoFocus=""
                                               autoComplete="email"
                                               pattern="\s*(([^<>()[\]\\\/.,;:\s@\\&quot;]+(\.[^<>()[\]\\\/.,;:\s@\\&quot;]+)*)|(\\&quot;.+\\&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*"
                                               aria-invalid="false"
                                               maxLength="100"
                                               className="login-input-field"
                                        />

                                        <label htmlFor="email"
                                               className="login-label-text login-label-text-focus">
                                            Email address
                                        </label>
                                    </div>

                                    <div className="login-form-field mt-4">
                                        <input type="password"
                                               id="password"
                                               name="password"
                                               placeholder="Password"
                                               required=""
                                               autoComplete="off"
                                               aria-invalid="false"
                                               className="login-input-field"
                                        />


                                        <label htmlFor="password"
                                               className="login-label-text login-label-text-focus">
                                            Password
                                        </label>
                                    </div>

                                    <div className="login-forgot-password-text-right mt-3">
                                        <button type="button"
                                                className="login-forgot-password-link login-forgot-password-button">
                                            Forgot password?
                                        </button>
                                    </div>

                                    <div className="mt-4">
                                        <button className="login-sign-in-button login-button" type="submit"
                                                data-automation-id="signin-submit-btn">Sign in
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="login-text-center mt-4">
                                <div>
                                    <span>Don't have an account?</span>
                                </div>

                                <Link to="/signUp"
                                      className="btn login-button login-create-button mt-4">
                                    Create account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(LoginComponent);