import { createStore, combineReducers } from "redux";
import reducer from "../reducers/todosReducers";

const store = createStore(reducer);

export default store;
