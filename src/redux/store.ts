import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./ducks";
import { configureStore } from "@reduxjs/toolkit";
import createThunkErrorHandlerMiddleware from "redux-thunk-error-handler";
import { ThunkErrorsHandler } from "./ducks/middlwares/catchThunkErrors";
import { authMiddleware } from "./ducks/middlwares/authMiddleware";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authMiddleware),
});

export const persistor = persistStore(store);
export type rootState = ReturnType<typeof store.getState>;
