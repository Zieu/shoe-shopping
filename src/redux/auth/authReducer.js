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

import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./authActions";

const initialState = {
  authStarted: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        authStarted: true,
      };

    default:
      return state;
  }
};
