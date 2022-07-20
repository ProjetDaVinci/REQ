import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getListTelegram } from "./thunks";
import { TelegramAkkRes } from "./types";

const initialState: TelegramAkkRes = {} as TelegramAkkRes;

const telegramAkk = createSlice({
  initialState,
  name: "telegramAkk",
  reducers: {
    deleteFilter(state, { payload }: PayloadAction<{ id: number }>) {
      if (payload) {
        state.data.map((item) => item.id !== payload.id);
        return state;

        // const findObj = state.find(
        //   (item) => item.namePage === payload.namePage
        // );
        // console.log("findObj", findObj);

        // if (findObj) {
        //   findObj.mass = [];
        //   // let mass = findObj.mass;
        //   // const newArr = mass.find((item) => item.name !== payload.itemName);
        //   console.log("СРАБОТАЛА удаление");

        //   // if (newArr) {
        //   //   // mass = newArr;
        //   //   // return state;
        //   // }
        // }
      }
      // if (state.accessToken) {
      //   state.accessToken = "";
      // }
      return state;
    },
  },
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
