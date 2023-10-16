import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFunction } from "react-i18next";

const initialState: { translation: TFunction<"translation"> | null } = {
  translation: null
};

const translationSlice = createSlice({
  name: "translationSlice",
  initialState,
  reducers: {
    setTranslation(state, { payload }: PayloadAction<TFunction<"translation">>) {
      state.translation = payload;
    }
  }
});
export const translationStore = translationSlice.reducer;
export const { setTranslation } = translationSlice.actions;
