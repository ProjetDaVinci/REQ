import { combineReducers } from "redux";
import * as auth from "./auth";
import * as filterPage from "./filterPage";
import * as keys from "./keys";
import * as myChanels from "./myChanels";
import * as proposal from "./proposal";
import * as information from "./information";
import * as telegramAkk from "./telegramAkk";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  filterPage: filterPage.reducer,
  keys: keys.reducer,
  myChanels: myChanels.reducer,
  proposal: proposal.reducer,
  information: information.reducer,
  telegramAkk: telegramAkk.reducer,
});

export const actions = {
  auth: auth.actions,
  filterPage: filterPage.actions,
  keys: keys.actions,
  myChanels: myChanels.actions,
  proposal: proposal.actions,
  information: information.actions,
  telegramAkk: telegramAkk.actions,
};

export const selectors = {
  auth: auth.selectors,
  filterPage: filterPage.selectors,
  keys: keys.selectors,
  myChanels: myChanels.selectors,
  proposal: proposal.selectors,
  information: information.selectors,
  telegramAkk: telegramAkk.selectors,
};

export const thunks = {
  auth: auth.thunks,
  keys: keys.thunks,
  myChanels: myChanels.thunks,
  proposal: proposal.thunks,
  information: information.thunks,
  telegramAkk: telegramAkk.thunks,
};
