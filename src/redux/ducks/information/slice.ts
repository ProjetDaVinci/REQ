import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getInfoList } from "./thunks";
import { InformationRes } from "./types";

const initialState: InformationRes = {} as InformationRes;

const myChanels = createSlice({
  initialState,
  name: "myChanels",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getInfoList.fulfilled,
      (state, { payload }: PayloadAction<InformationRes>) => {
        return payload;
      }
    );
    builder.addCase(getInfoList.rejected, () => {
      return initialState;
    });
  },
});

const reducer = myChanels.reducer;
const actions = { ...myChanels.actions };

export { reducer, actions };
