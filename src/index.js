import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createRoutes from './router/routes'

const routes = createRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
