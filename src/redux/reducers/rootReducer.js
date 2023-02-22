import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    tag: filterReducer,
})
export default rootReducer;