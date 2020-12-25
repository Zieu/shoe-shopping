// export const //
//   USER_LOADING = "USER_LOADING",
//   USER_LOADED = "USER_LOADED",
//   SIGNUP_ERROR = "SIGNUP_ERROR",
//   LOGIN_SUCCESS = "LOGIN_SUCCESS",
//   LOGIN_FAIL = "LOGIN_FAIL",
//   LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
//   REGISTER_SUCCESS = "REGISTER_SUCCESS",
//   REGISTER_FAIL = "REGISTER_FAIL";

import axios from "axios";

export const //
  SIGNUP_START = "SIGNUP_START",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_FAIL = "SIGNUP_FAIL",
  SIGNIN_START = "SIGNIN_START",
  SIGNIN_SUCCESS = "SIGNIN_SUCCESS",
  SIGNIN_FAIL = "SIGNIN_FAIL";

export const signupStart = () => {
  return {
    type: SIGNUP_START,
  };
};

export const signupSuccess = (signupData) => {
  return {
    type: SIGNUP_SUCCESS,
    SIGNUPData: signupData,
  };
};

export const signupFail = (error) => {
  return {
    type: SIGNUP_FAIL,
    error: error,
  };
};

export const signup = (data) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const response = await axios.post(
      "http://localhost:5000/users/signup",
      data
    );
    console.log(response);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data,
      status: response.status,
    });
  } catch (error) {
    dispatch(signupFail(error));
  }
};

export const signinStart = () => {
  return {
    type: SIGNIN_START,
  };
};

export const signinSuccess = (signinData) => {
  return {
    type: SIGNIN_SUCCESS,
    SIGNUPData: signinData,
  };
};

export const signinFail = (error) => {
  return {
    type: SIGNIN_FAIL,
    error: error,
  };
};

export const signin = (data) => async (dispatch) => {
  dispatch(signinStart());
  try {
    const response = await axios.post(
      "http://localhost:5000/users/login",
      data
    );
    console.log(response.data);
    const token = response.data.data.user.token;

    localStorage.setItem("token", token);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: response.data,
      status: response.status,
    });
  } catch (error) {
    dispatch(signinFail(error));
  }
};
