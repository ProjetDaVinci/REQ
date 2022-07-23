import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getProposalList, updateProposal, updatesTagsProposal } from "./thunks";
import { ProposalREQ, ProposalRes } from "./types";

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

    builder.addCase(
      updateProposal.fulfilled,
      (state, { payload }: PayloadAction<ProposalREQ>) => {
        if (payload) {
          const index = state.data.findIndex(
            (n) => n.id === payload.proposal.id
          );
          if (index !== -1) {
            state.data.splice(index, 1);
            state.data.push(payload.proposal);

            return state;
          }
        }
        // return payload;
      }
    );
    builder.addCase(updateProposal.rejected, () => {
      return initialState;
    });
    builder.addCase(
      updatesTagsProposal.fulfilled,
      (state, { payload }: PayloadAction<ProposalREQ>) => {
        if (payload) {
          const index2 = state.data.findIndex(
            (n) => n.id === payload.proposal.id
          );
          if (index2 == -1) {
            state.data.splice(index2, 1);
            state.data.push(payload.proposal);
            return state;
          }
        }
        //   const index = state.data.find(
        //     (item) => item.id === payload.proposal.id
        //   );
        //   if (index !== undefined) {
        //     index.zametki === payload.proposal.zametki;
        //     return state;
        //   }

        //   return state;
      }
    );
    builder.addCase(updatesTagsProposal.rejected, () => {
      return initialState;
    });
  },
});

const reducer = proposal.reducer;
const actions = { ...proposal.actions };

export { reducer, actions };
