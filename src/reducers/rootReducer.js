import championReducer from "./championReducer";
import itemReducer from "./itemReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    championReducer,
    itemReducer
})

export default rootReducer;