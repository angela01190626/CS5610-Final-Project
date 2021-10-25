import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Home from '../pages/Home/Home';

const createRoutes = () => (
    <Router>
      <Route exact path={["/", "/home"]} component={Home}/>
      <Route exact path={"/checkout"} component={Checkout}/>
    </Router>
);

export default createRoutes;