import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { addKeys, deleteKeys, getListKeys, updateKeys } from "./thunks";
import { KlyuchevikiAnswer, KlyuchevikiQue, KlyuchevikiRes } from "./types";

const initialState: KlyuchevikiRes = {} as KlyuchevikiRes;

const keys = createSlice({
  initialState,
  name: "keys",
  reducers: {
    deleteKeys(state, { payload }: PayloadAction<number>) {
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
      getListKeys.fulfilled,
      (state, { payload }: PayloadAction<KlyuchevikiRes>) => {
        return payload;
      }
    );
    builder.addCase(getListKeys.rejected, () => {
      return initialState;
    });
    builder.addCase(getListKeys.pending, (state) => {
      state.isPending = true;
    });

    builder.addCase(
      addKeys.fulfilled,
      (state, { payload }: PayloadAction<KlyuchevikiAnswer>) => {
        state.data.unshift(payload.klyucheviki);
        return state;
      }
    );
    builder.addCase(addKeys.rejected, () => {
      return initialState;
    });
    builder.addCase(
      updateKeys.fulfilled,
      (state, { payload }: PayloadAction<KlyuchevikiAnswer>) => {
        const index = state.data.findIndex(
          (n) => n.id === payload.klyucheviki.id
        );
        if (payload) {
          if (index !== -1) {
            state.data.splice(index, 1);
            state.data.unshift(payload.klyucheviki);

            return state;
          }
        }

        // state.data.unshift(payload.klyucheviki);
        return state;
      }
    );
    builder.addCase(updateKeys.rejected, () => {
      return initialState;
    });
  },
});

const reducer = keys.reducer;
const actions = { ...keys.actions };

export { reducer, actions };
