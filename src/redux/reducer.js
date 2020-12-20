import { combineReducers } from "redux";

// reducers
import { compReducer } from "./comp/compReducer";
import { authReducer } from "./auth/authReducer";
// import {anotherReducer} from './another/anotherReducer'

export const reducer = combineReducers({
  comp: compReducer,
  auth: authReducer,
  // another: anotherReducer
});
