import { IAuthResponse } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn, signUp } from "./thunks";

const initialState: IAuthResponse = {} as IAuthResponse;

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signOut(state) {
      if (state.accessToken) {
        state.accessToken = "";
      }
      return state;
    },
    signIn(state) {
      state.accessToken = "dfgdgdfbdknfvdfnjn";
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      signUp.fulfilled,
      (state, { payload }: PayloadAction<IAuthResponse>) => {
        return payload;
      }
    );
    builder.addCase(signUp.rejected, () => {
      return initialState;
    });
    builder.addCase(
      signIn.fulfilled,
      (state, { payload }: PayloadAction<IAuthResponse>) => {
        return payload;
      }
    );
  },
});

const reducer = AuthSlice.reducer;
const actions = { ...AuthSlice.actions };

export { reducer, actions };
