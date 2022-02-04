import {combineReducers} from "redux";
import {reducer} from "./reducers";

const reducers = combineReducers({
    allInfo: reducer,
})

export default reducers;