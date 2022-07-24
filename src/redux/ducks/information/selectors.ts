import { rootState } from "../../store";

export const SelectInfo = (state: rootState) => state.information.data;
export const SelectPending = (state: rootState) => state.information.isPending;
