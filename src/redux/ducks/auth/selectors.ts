import { rootState } from "../../store";

export const SelectToken = (state: rootState) => state.auth.accessToken;
