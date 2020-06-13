export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

const baseUrl = 'http://localhost/Cex-assignment';

export const loginUser = (payload) => {
    return (dispatch) => {
        dispatch(loginStart());
    
        fetch(`${baseUrl}/users/login`, {
            method: "post",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('_token', data.response.token);
                localStorage.setItem('user_id', data.response.id);
                dispatch(loginSuccess(data));
            })
            .catch((error) => dispatch(loginFailed(error)));
    };
};

const loginStart = () => {
    return {
        type: USER_LOGIN_START,
    };
};
  
const loginSuccess = (data) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: data,
    };
};
  
const loginFailed = (error) => {
    return {
      type: USER_LOGIN_FAILED,
      error,
    };
};