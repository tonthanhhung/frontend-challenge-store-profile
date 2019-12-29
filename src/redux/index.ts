import { combineReducers } from "redux";
import cities from "./cities";
import currentStore from "./store";

export type RootState = {
  cities: City[];
  currentStore: Store;
};

export default combineReducers({ cities, currentStore });
