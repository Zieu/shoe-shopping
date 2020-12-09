import { combineReducers } from "redux";

// reducers
import { compReducer } from "./comp/compReducer";
// import {anotherReducer} from './another/anotherReducer'

export const reducer = combineReducers({
  comp: compReducer,
  // another: anotherReducer
});
