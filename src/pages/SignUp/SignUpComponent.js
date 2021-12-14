import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Link, useHistory} from "react-router-dom";
import {register} from "../../services/profileService";
import {useDispatch} from "react-redux";

const SignUpComponent = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const [result, setResult] = useState('' );

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            emailAddress: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'Min 8 characters required').required('Required')
        }),
        onSubmit: values => {
            register(dispatch, values).then(status => {
                if(status.status === 200)
                {
                    history.push('/')
                }else if(status.status === 404)
                {
                    setResult('EmailAddress already present.');
                }
            });
        },
    });
    return (
        <>
            <div className="mt-4">
                <div className="signUp-text-center">
                    <Link to="/">
                        <i className="fas fa-shopping-basket trademark-icon"></i>
                    </Link>
                    <h1 className="fs-5 fw-bold mt-4">
                        Create your ShopEazy account
                    </h1>
                </div>

                <div className="signUp-sign-in-widget mx-5">
                    <form className="signUp-form-box" onSubmit={formik.handleSubmit}>
                        <div>
                            <div>
                                {result.toString() ? (
                                    <div className="signup-error">{result.toString()}</div>
                                ) : null}
                                <div className="signUp-form-field mt-4">
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="First name"
                                        className="signUp-input-field"
                                        {...formik.getFieldProps('firstName')}
                                    />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div className="signup-error">{formik.errors.firstName}</div>
                                    ) : null}

                                    <label htmlFor="firstName"
                                           className="signUp-label-text signUp-label-text-focus">
                                        First name</label>

                                </div>

                                <div className="signUp-form-field mt-4">
                                    <input
                                        id="lastName"
                                        type="text"
                                        placeholder="Last name"
                                        className="signUp-input-field"
                                        {...formik.getFieldProps('lastName')} />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div className="signup-error">{formik.errors.lastName}</div>
                                    ) : null}

                                    <label htmlFor="lastName"
                                           className="signUp-label-text signUp-label-text-focus">
                                        Last name
                                    </label>
                                </div>

                                <div className="signUp-form-field mt-4">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email address"
                                        className="signUp-input-field"
                                        {...formik.getFieldProps('emailAddress')} />
                                    {formik.touched.emailAddress && formik.errors.emailAddress ? (
                                        <div className="signup-error">{formik.errors.emailAddress}</div>
                                    ) : null}

                                    <label htmlFor="email"
                                           className="signUp-label-text signUp-label-text-focus">
                                        Email address
                                    </label>


                                </div>

                                <div className="signUp-form-field mt-4">
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        className="signUp-input-field"
                                        {...formik.getFieldProps('password')} />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="signup-error">{formik.errors.password}</div>
                                    ) : null}
                                    <label htmlFor="password"
                                           className="signUp-label-text signUp-label-text-focus">
                                        Password
                                    </label>
                                </div>

                                <div className="mt-4">
                                    <p className="text-muted">
                                        By clicking Create Account, you acknowledge you have read and agreed to
                                        our&nbsp;
                                        <a
                                            href="/#"
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
    );
};

export default SignUpComponent;