import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";
import { getProposalList } from "./thunks";
import { ProposalRes } from "./types";

const initialState: ProposalRes = {} as ProposalRes;

const proposal = createSlice({
  initialState,
  name: "proposal",
  reducers: {},
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
