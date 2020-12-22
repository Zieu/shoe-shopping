// export const //
//   USER_LOADING = "USER_LOADING",
//   USER_LOADED = "USER_LOADED",
//   AUTH_ERROR = "AUTH_ERROR",
//   LOGIN_SUCCESS = "LOGIN_SUCCESS",
//   LOGIN_FAIL = "LOGIN_FAIL",
//   LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
//   REGISTER_SUCCESS = "REGISTER_SUCCESS",
//   REGISTER_FAIL = "REGISTER_FAIL";

import axios from "axios";

export const //
  AUTH_START = "AUTH_START",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_FAIL = "AUTH_FAIL";

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

export const auth = (username, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const data = {
      title: username,
      body: password,
      userId: 1,
    };
    const response = await axios.get("localhost:5000/users", data);
    console.log(response);

    dispatch({
      type: AUTH_SUCCESS,
      payload: response.data,
      status: response.status,
    });
  } catch (error) {
    dispatch(authFail(error));
  }
};
