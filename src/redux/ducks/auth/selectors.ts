import { rootState } from "../../store";

export const SelectToken = (state: rootState) => state.auth.token;
export const resServer = (state: rootState) => state.auth;
