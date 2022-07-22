import { FilterSelect } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";

const initialState: FilterSelect = { namePage: "Новая", onAddKey: false };

const filtersPage = createSlice({
  initialState,
  name: "filtersPage",
  reducers: {
    selectFilter(state, { payload }: PayloadAction<string>) {
      if (payload) {
        state.namePage = payload;
        return state;
      }
    },

    onAddKey(state, { payload }: PayloadAction<boolean>) {
      if (payload) {
        state.onAddKey = payload;
        return state;
      }
    },

    onClose(state, { payload }: PayloadAction<boolean>) {
      if (payload) {
        state.onAddKey.valueOf() === payload;
        return state;
      }
      return state;
    },
  },
});

const reducer = filtersPage.reducer;
const actions = { ...filtersPage.actions };

export { reducer, actions };
