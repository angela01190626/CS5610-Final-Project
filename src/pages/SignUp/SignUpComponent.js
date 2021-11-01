import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="mt-4">
                    <div className="signUp-text-center">
                        <Link to="/">
                            <i className="fas fa-shopping-basket trademark-icon"></i>
                        </Link>
                        <h1 className="fs-5 fw-bold mt-4">
                            Create your Wallcart account
                        </h1>
                    </div>

                    <div className="signUp-sign-in-widget mx-5">
                        <form className="signUp-form-box">
                            <div>
                                <div>
                                    <div className="signUp-form-field mt-4">
                                        <input type="text"
                                               id="first-name-su"
                                               name="firstName"
                                               placeholder="First name"
                                               required=""
                                               autoFocus=""
                                               autoComplete="given-name"
                                               pattern="^[a-zA-Z0-9áéíóúüñ,'\-\s]*[a-zA-Z0-9áéíóúüñ,']+$"
                                               maxLength="25"
                                               aria-invalid="false"
                                               className="signUp-input-field"
                                        />

                                        <label htmlFor="first-name-su"
                                               className="signUp-label-text signUp-label-text-focus">
                                            First name</label>
                                    </div>

                                    <div className="signUp-form-field mt-4">
                                        <input type="text"
                                               id="last-name-su"
                                               name="lastName"
                                               placeholder="Last name"
                                               required=""
                                               pattern="^[a-zA-Z0-9áéíóúüñ,'\-\s]*[a-zA-Z0-9áéíóúüñ,']+$"
                                               aria-invalid="false"
                                               maxLength="25"
                                               className="signUp-input-field"
                                        />

                                        <label htmlFor="last-name-su"
                                               className="signUp-label-text signUp-label-text-focus">
                                            Last name
                                        </label>
                                    </div>

                                    <div className="signUp-form-field mt-4">
                                        <input type="email"
                                               id="email-su"
                                               name="email"
                                               placeholder="Email address"
                                               required=""
                                               autoComplete="email"
                                               pattern="\s*(([^<>()[\]\\\/.,;:\s@\\&quot;]+(\.[^<>()[\]\\\/.,;:\s@\\&quot;]+)*)|(\\&quot;.+\\&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*"
                                               aria-invalid="false"
                                               maxLength="100"
                                               className="signUp-input-field"
                                        />

                                        <label htmlFor="email-su"
                                               className="signUp-label-text signUp-label-text-focus">
                                            Email address
                                        </label>
                                    </div>

                                    <div className="signUp-form-field mt-4">
                                        <input type="password"
                                               id="password-su"
                                               placeholder="Create a password"
                                               name="password"
                                               required=""
                                               autoComplete="off"
                                               pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9\W]).\S*$"
                                               aria-invalid="false"
                                               minLength="8"
                                               maxLength="100"
                                               aria-describedby="password-su-password-rules"
                                               className="signUp-input-field"
                                        />

                                        <label htmlFor="password-su"
                                               className="signUp-label-text signUp-label-text-focus">
                                            Password
                                        </label>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-muted">
                                            By clicking Create Account, you acknowledge you have read and agreed to
                                            our&nbsp;
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Terms of use, Opens in a new tab"
                                                className="privacy-links">
                                                Terms of Use
                                            </a>
                                            &nbsp;and&nbsp;
                                            <a
                                                href="../../privacy%20policy/privacy-policy.html"
                                                target="_blank"
                                                rel="noopener"
                                                aria-label="Privacy policy, Opens in a new tab"
                                                className="privacy-links">
                                                Privacy Policy
                                            </a>
                                            .
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button className="signUp-sign-in-button signUp-button" type="submit">
                                            Create account
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="signUp-text-center mt-4">
                                <div>
                                    <span>Already have an account?</span>
                                </div>

                                <Link to="/login"
                                      className="btn signUp-button signUp-create-button mt-4">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default SignUpComponent;