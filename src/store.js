import { createStore,combineReducers,applyMiddleware } from 'redux';
import logger from "redux-logger";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
// const store = createStore(reducer,1);/*initialstate*/

const myLogger = (store) => (next) => (action) => {
  console.log("logged Action :", action);
  next(action);
}
export default createStore(combineReducers({math,user}),
{},
applyMiddleware(myLogger,thunk,promise()));
