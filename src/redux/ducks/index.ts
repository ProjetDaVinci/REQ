import { combineReducers } from "redux";
import * as auth from "./auth";
import * as filterPage from "./filterPage";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  filterPage: filterPage.reducer,
});

export const actions = {
  auth: auth.actions,
  filterPage: filterPage.actions,
};

export const selectors = {
  auth: auth.selectors,
  filterPage: filterPage.selectors,
};
