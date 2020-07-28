import { createStore, combineReducers, applyMiddleware } from "redux";
import testreducer from "./reducers/test";
import todoreducer from "./reducers/todo";
import thunk from "redux-thunk";

//使用自带的API combineReducers合并reducers
const reducer = combineReducers({
  test: testreducer,
  todo: todoreducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
