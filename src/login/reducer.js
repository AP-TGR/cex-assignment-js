import {
      USER_LOGIN_START,
      USER_LOGIN_SUCCESS,
      USER_LOGIN_FAILED,
    } from "./actions";
  
const initialState = {
    loading: false,
    error: null,
    isLogedIn: false,
};
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case USER_LOGIN_START:
        return { ...state, loading: true };
  
      case USER_LOGIN_SUCCESS:
        return { ...state, loading: false, error: null, isLogedIn: true };
  
      case USER_LOGIN_FAILED:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
}
  