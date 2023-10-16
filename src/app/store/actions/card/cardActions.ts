import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Helpers.js/MakeRequest";
import { getUrlWithSearchParams } from "../../Helpers.js/getUrlWithSearchParams";
import { ICardResponse } from "../../../types/CardTypes";
import { auth } from "../../endpoints/links";

export const getDataRequest = createAsyncThunk(
  "get/data",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await instance.get<ICardResponse>(
        getUrlWithSearchParams(auth.settings, {
          Name: data.Query
        })
      );
      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue("error");
    }
  }
);

export const createAccountRequest = createAsyncThunk(
  "create/account",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await instance.post(auth.settings, params);
      return { status: response.data.status };
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);

export const addCreditRequest = createAsyncThunk(
  "add/credit",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await instance.post(auth.settings, params);
      return { status: response.data.status };
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);

export const resendVerifyRequest = createAsyncThunk(
  "add/credit",
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await instance.post(auth.settings, params);
      return { status: response.data.status };
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  }
);
