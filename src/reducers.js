import { combineReducers } from "redux";
import register from "./register/reducer";
import login from "./login/reducer";
import profile from "./profile/reducer";

export default combineReducers({
  register,
  login,
  profile
});
