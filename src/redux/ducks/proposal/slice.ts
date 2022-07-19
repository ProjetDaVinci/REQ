import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getProposalList } from "./thunks";
import { KlyuchevikiRes } from "./types";

const initialState: KlyuchevikiRes = {} as KlyuchevikiRes;

const myChanels = createSlice({
  initialState,
  name: "myChanels",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProposalList.fulfilled,
      (state, { payload }: PayloadAction<KlyuchevikiRes>) => {
        return payload;
      }
    );
    builder.addCase(getProposalList.rejected, () => {
      return initialState;
    });
  },
});

const reducer = myChanels.reducer;
const actions = { ...myChanels.actions };

export { reducer, actions };
