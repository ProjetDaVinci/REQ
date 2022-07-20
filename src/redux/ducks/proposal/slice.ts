import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getProposalList } from "./thunks";
import { ProposalRes } from "./types";

const initialState: ProposalRes = {} as ProposalRes;

const proposal = createSlice({
  initialState,
  name: "proposal",
  reducers: {
    deleteProposal(state, { payload }: PayloadAction<number>) {
      const index = state.data.findIndex((n) => n.id === payload);
      if (payload) {
        if (index !== -1) {
          state.data.splice(index, 1);
          return state;
        }
      }
      return state;
    },
    changeProposal(
      state,
      { payload }: PayloadAction<{ id: number; status: string }>
    ) {
      // const index = state.data.find((item) => item.id === payload.id);

      const index = state.data.findIndex((n) => n.id === payload.id);
      console.log("index", index);

      if (payload) {
        if (index !== -1) {
          console.log("index", state.data[index].text);

          state.data[index].status = payload.status;
          return state;
        }
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProposalList.fulfilled,
      (state, { payload }: PayloadAction<ProposalRes>) => {
        return payload;
      }
    );
    builder.addCase(getProposalList.rejected, () => {
      return initialState;
    });
  },
});

const reducer = proposal.reducer;
const actions = { ...proposal.actions };

export { reducer, actions };
