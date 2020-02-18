import { combineReducers } from "redux";
import users from "./userReducer";
import rooms from "./roomReducer";

export default combineReducers({
    users,
    rooms,
});