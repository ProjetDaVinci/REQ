import { rootState } from "../../store";

export const SelectKeys = (state: rootState) => state.keys.data;
export const SelectPending = (state: rootState) => state.keys.isPending;
