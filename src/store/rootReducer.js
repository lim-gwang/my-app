import { combineReducers } from "redux";
import { itemReducer, deviceReducer, CSListReducer } from './actions/actions';

const rootReducer = combineReducers({
    itemReducer,
    deviceReducer,
    CSListReducer
});

export default rootReducer;