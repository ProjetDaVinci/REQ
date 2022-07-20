import { FilterSelect } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";

const initialState: FilterSelect = { namePage: "Новая" };

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
  },
});

const reducer = filtersPage.reducer;
const actions = { ...filtersPage.actions };

export { reducer, actions };
