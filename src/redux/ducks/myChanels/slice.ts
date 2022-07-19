import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getListMyChanels } from "./thunks";
import { KlyuchevikiRes } from "./types";

const initialState: KlyuchevikiRes = {} as KlyuchevikiRes;

const myChanels = createSlice({
  initialState,
  name: "myChanels",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getListMyChanels.fulfilled,
      (state, { payload }: PayloadAction<KlyuchevikiRes>) => {
        return payload;
      }
    );
    builder.addCase(getListMyChanels.rejected, () => {
      return initialState;
    });
  },
});

const reducer = myChanels.reducer;
const actions = { ...myChanels.actions };

export { reducer, actions };
