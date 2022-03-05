import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import nameReducer from "../Reducers/nameReducer";
import cityReducer from "../Reducers/CityReducer";

const CombinedReducers = combineReducers({
  nameReducer, // nameReducer:nameReducer
  cityReducer,
});

const myStore = createStore(CombinedReducers, applyMiddleware(logger));

export default myStore;
