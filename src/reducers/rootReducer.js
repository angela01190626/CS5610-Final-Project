import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import AppReducer from './appReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    search: searchReducer,
    app: AppReducer,
    user: userReducer
});
export default rootReducer;