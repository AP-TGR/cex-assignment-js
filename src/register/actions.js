export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

const baseUrl = process.env["REACT_APP_API_BASE"];

export const registerUser = (payload) => {
  return (dispatch) => {
    dispatch(registerUserStart());
    fetch(`${baseUrl}/users/register`, {
      method: "post",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => dispatch(registerUserSuccess(data)))
      .catch((error) => dispatch(registerUserFailed(error)));
  };
};

const registerUserStart = () => {
  return {
    type: REGISTER_USER_START,
  };
};

const registerUserSuccess = (data) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: data,
  };
};

const registerUserFailed = (error) => {
  return {
    type: REGISTER_USER_FAILED,
    error,
  };
};
