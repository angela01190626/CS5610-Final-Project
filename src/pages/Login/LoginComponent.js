import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Link, useHistory} from "react-router-dom";
import {login, profile} from "../../services/profileService";
import {useDispatch} from "react-redux";

const LoginComponent = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const [result, setResult] = useState('');

    const clearResult = () => {
        setResult("");
    }

    return (
        <Formik
            initialValues={{emailAddress: '', password: ''}}

            validationSchema={Yup.object({
                emailAddress: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().min(8, 'Min 8 characters required').required('Required'),
            })}

            onSubmit={(values) => {
                login(dispatch, values).then(status => {
                    if (status.status == 200) {
                        history.push('/')
                    } else {

                        setResult('Invalid username/password');

                    }
                });
            }}
                >
            {formik => (
                <div className="mt-4">
                <div className="login-text-center">
                <Link to="/">
                <i className="fas fa-shopping-basket trademark-icon"></i>
                </Link>
                <h1 className="fs-5 mt-4 fw-bold">
                Sign in to your ShopEazy account
                </h1>
                </div>

                <div className="login-sign-in-widget mx-5">
                <form className="login-form-box" onSubmit={formik.handleSubmit} onChange={clearResult}>
                <div>
                <div>
            {result.toString() ? (
                <div className="login-error">{result.toString()}</div>
                ) : null}


                <div className="login-form-field mt-4">
                <input
                id="email"
                type="email"
                placeholder="Email address"
                className="login-input-field"
            {...formik.getFieldProps('emailAddress')} />
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
                <div className="login-error">{formik.errors.emailAddress}</div>
                ) : null}

                <label htmlFor="emailAddress"
                className="login-label-text login-label-text-focus">
                Email address
                </label>
                </div>

                <div className="login-form-field mt-4">
                <input
                id="password"
                type="password"
                placeholder="Password"
                className="login-input-field"
            {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
                <div className="login-error">{formik.errors.password}</div>
                ) : null}


                <label htmlFor="password"
                className="login-label-text login-label-text-focus">
                Password
                </label>
                </div>

                <div className="mt-4">
                <button className="login-sign-in-button login-button" type="submit">
                Sign in
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
                )}
                </Formik>
                );
                };

                export default LoginComponent;