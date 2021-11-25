import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    search: searchReducer,
    user: userReducer
});
export default rootReducer;