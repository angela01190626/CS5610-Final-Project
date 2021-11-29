import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Privacypolicy from "../pages/Privacy policy/Privacypolicy";
import Profile from "../pages/Profile/Profile";
import Orders from "../pages/Profile/Orders";
import Address from "../pages/Profile/Address";
import Payment from "../pages/Profile/Payment";
import Search from "../pages/Search/Search";
import Cart from '../pages/Cart/Cart';
import '../index.css';
import Notifications from "../pages/Profile/Notifications";
import ProductDetail from "../pages/Detail/ProductDetail";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";

const promise= loadStripe('pk_test_51JzaaoGZHW3thxot5OHX6RZlaHgw1f1V0R4Klu0fL6oyeJj4RDNkzEWp9jOEBsF9Ha2SGv64evhpzub3Y5wDWTSK00Jnaflgby');

const createRoutes = () => (

        <Router>
            <div className="container-fluid border-padding">
                <Route exact path={["/", "/home"]} component={Home}/>

                <Route exact path={"/checkout"}>
                    <Elements stripe={promise}>
                        <Checkout/>
                    </Elements>
                </Route>

                <Route exact path={"/login"} component={Login}/>
                <Route exact path={"/signUp"} component={SignUp}/>
                <Route exact path={"/privacypolicy"} component={Privacypolicy}/>
                <Route exact path={"/profile"} component={Profile}/>
                <Route exact path={"/orders"} component={Orders}/>
                <Route exact path={"/address"} component={Address}/>
                <Route exact path={"/payment"} component={Payment}/>
                <Route exact path={"/search"} component={Search}/>
                <Route exact path={"/notifications"} component={Notifications}/>
                <Route exact path={"/details/:productId"} component={ProductDetail}/>
                <Route exact path={"/cart"} component={Cart}/>
            </div>
        </Router>

);

export default createRoutes;