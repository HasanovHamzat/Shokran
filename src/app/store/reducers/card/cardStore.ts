import { createSlice } from "@reduxjs/toolkit";
import { ICard, IStatus } from "../../../types/CardTypes";

export interface IInitialState {
  cardCreate: ICard[];
  cardScreen: number[];
  cardCreateStatus: IStatus;
}

const initialState: IInitialState = {
  cardCreate: [],
  cardScreen: [1],
  cardCreateStatus: "Loading"
};

export const cardStore = createSlice({
  name: "cardsStore",
  initialState,
  reducers: {
    setCardScreen(state, { payload }) {
      console.log({ payload });
      state.cardScreen = payload;
    }
  },
  extraReducers: (builder) => {}
});

export const cardSlice = cardStore.reducer;
export const { setCardScreen } = cardStore.actions;
