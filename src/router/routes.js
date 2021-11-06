import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Privacypolicy from "../pages/Privacy policy/Privacypolicy";

const createRoutes = () => (
    <Router>
        <div className="container">
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path={"/checkout"} component={Checkout}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/signUp"} component={SignUp}/>
            <Route exact path={"/privacypolicy"} component={Privacypolicy}/>
        </div>
    </Router>
);

export default createRoutes;