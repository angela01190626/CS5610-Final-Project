import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';
import Privacypolicy from '../pages/Privacy policy/Privacypolicy'
import Profile from "../pages/Profile/Profile";

const createRoutes = () => (
    <Router>
        <Route exact path={["/", "/home"]} component={Home}/>
            <Link to = '/pages/Profile'>
                <Profile/>
            </Link>
        <Route exact path={"/checkout"} component={Checkout}/>
        <Route exact path={"/profile"} component={Profile}>

        </Route>
        <Route exact path={"/privacypolicy"} component={Privacypolicy}/>

    </Router>
);

export default createRoutes;