import { combineReducers } from "redux";
import { itemReducer } from './actions/actions';

const rootReducer = combineReducers({
    itemReducer,
});

export default rootReducer;