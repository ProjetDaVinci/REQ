import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getInfoList } from "./thunks";
import { InformationRes } from "./types";

const initialState: InformationRes = {} as InformationRes;

const info = createSlice({
  initialState,
  name: "info",
  reducers: {
    deleteInfo(state, { payload }: PayloadAction<number>) {
      const index = state.data.findIndex((n) => n.id === payload);
      if (payload) {
        if (index !== -1) {
          state.data.splice(index, 1);
          return state;
        }
      }
      return state;
    },
  },
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

const reducer = info.reducer;
const actions = { ...info.actions };

export { reducer, actions };
