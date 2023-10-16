import { combineReducers } from "redux";
import { cardSlice } from "../reducers/card/cardStore";
import { translationStore } from "../translationStore";

export const rootReducer = combineReducers({
  cardSlice,
  translationStore
});
