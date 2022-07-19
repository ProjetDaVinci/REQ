import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getListTelegram } from "./thunks";
import { TelegramAkkRes } from "./types";

const initialState: TelegramAkkRes = {} as TelegramAkkRes;

const telegramAkk = createSlice({
  initialState,
  name: "telegramAkk",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getListTelegram.fulfilled,
      (state, { payload }: PayloadAction<TelegramAkkRes>) => {
        return payload;
      }
    );
    builder.addCase(getListTelegram.rejected, () => {
      return initialState;
    });
  },
});

const reducer = telegramAkk.reducer;
const actions = { ...telegramAkk.actions };

export { reducer, actions };
