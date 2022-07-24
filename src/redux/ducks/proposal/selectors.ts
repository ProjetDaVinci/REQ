import { rootState } from "../../store";

export const SelectPoposal = (state: rootState) => state.proposal.data;
export const SelectCount = (state: rootState) => state.proposal.count;
export const SelectPending = (state: rootState) => state.proposal.isPending;
