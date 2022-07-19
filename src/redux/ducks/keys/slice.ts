import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getListKeys } from "./thunks";
import { KlyuchevikiRes } from "./types";

const initialState: KlyuchevikiRes = {} as KlyuchevikiRes;

const keys = createSlice({
  initialState,
  name: "keys",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getListKeys.fulfilled,
      (state, { payload }: PayloadAction<KlyuchevikiRes>) => {
        return payload;
      }
    );
    builder.addCase(getListKeys.rejected, () => {
      return initialState;
    });
  },
});

const reducer = keys.reducer;
const actions = { ...keys.actions };

export { reducer, actions };
