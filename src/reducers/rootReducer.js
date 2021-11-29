import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';
import AppReducer from './appReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    search: searchReducer,
    app: AppReducer
});
export default rootReducer;