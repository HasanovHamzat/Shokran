import { combineReducers } from "redux";
import { cardSlice } from "../reducers/card/cardStore";

export const rootReducer = combineReducers({
  cardSlice
});
