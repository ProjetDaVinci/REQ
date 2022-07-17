import { createAsyncThunk } from "@reduxjs/toolkit";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../../constants";
import { IAuthData } from "./types";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";

export const signUp = createAsyncThunk(
  "/auth/sign_up",
  async (authData: IAuthData) => {
    const { data }: AxiosResponse = await http.post(SIGN_UP_URL, authData);
    return data;
  }
);

export const signIn = createAsyncThunk(
  "auth/sign_in",
  async (authData: IAuthData) => {
    const { data }: AxiosResponse = await http.post(SIGN_IN_URL, authData);
    return data;
  }
);
