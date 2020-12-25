// import {
//   USER_LOADING,
//   USER_LOADED,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT_SUCCESS,
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
// } from "./authActions";

// const initialState = {
//   toggleText: false,
// };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_LOADING:
//       return {
//         ...state,
//         toggleText: !state.toggleText,
//       };

//     default:
//       return state;
//   }
// };

import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from "./authActions";

const initialState = {
  signupStarted: false,
  signinStarted: false,
  isAuthenticated: false,
  signupError: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        signupStarted: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupStarted: true,
        isAuthenticated: true,
        signupError: false,
      };
    case SIGNIN_START:
      return {
        ...state,
        signinStarted: true,
      };
    default:
      return state;
  }
};
