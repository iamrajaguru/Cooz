import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Codedash from "./CookFlow/Reducers/codedash";
export default createStore(
  combineReducers({
    Codedash
  }),
  applyMiddleware(ReduxThunk)
);
