
import ReactDOM from 'react-dom';
import './index.css';
import createRoutes from './router/routes';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools());
const routes = createRoutes();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
