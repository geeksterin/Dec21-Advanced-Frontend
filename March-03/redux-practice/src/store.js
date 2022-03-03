import { createStore } from "redux";
import reducer from "./allMyReducers/reducer";

const store = createStore(reducer);

export default store;
