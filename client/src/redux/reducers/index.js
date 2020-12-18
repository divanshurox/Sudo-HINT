import { combineReducers } from "redux";
import codeReducer from "./codeReducer";

//combine multiple reducers
export default combineReducers({
  //reducers!!
  code: codeReducer,
});
