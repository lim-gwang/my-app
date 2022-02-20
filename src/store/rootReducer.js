import { combineReducers } from "redux";
import { itemReducer, deviceReducer } from './actions/actions';

const rootReducer = combineReducers({
    itemReducer,
    deviceReducer
});

export default rootReducer;