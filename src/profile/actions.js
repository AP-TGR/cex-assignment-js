import { USER_LOGIN_FAILED } from "../login/actions";

export const USER_PROFILE_START = "USER_PROFILE_START";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAILED = "USER_PROFILE_FAILED";

const baseUrl = process.env["REACT_APP_API_BASE"];

export const fetchProfile = (payload) => {
    return (dispatch) => {
        dispatch(userProfileStart());

        let token = localStorage.getItem('_token');
        let id = localStorage.getItem('user_id');
        fetch(`${baseUrl}/users/${id}`, {
            method: "get",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => dispatch(userProfileSuccess(data.response)))
            .catch((error) => dispatch(userProfileFailed(error)));
    };
};

const userProfileStart = () => {
    return {
        type: USER_PROFILE_START,
    };
};
  
const userProfileSuccess = (data) => {
    return {
        type: USER_PROFILE_SUCCESS,
        payload: data,
    };
};
  
const userProfileFailed = (error) => {
    return {
      type: USER_LOGIN_FAILED,
      error,
    };
};