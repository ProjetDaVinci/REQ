import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";

export const getListKeys = createAsyncThunk(
  "/klyucheviki/get-list",
  async () => {
    const { data }: AxiosResponse = await http.post("/klyucheviki/get-list", {
      limit: 20,
      offset: 0,
    });

    console.log("klyucheviki", data);

    return data;
  }
);

export const deleteKeys = createAsyncThunk(
  "/klyucheviki/delete",
  async (keyId: number) => {
    console.log("klyucheviki", keyId);

    // const { data }: AxiosResponse = await http.delete(
    //   "/klyucheviki/delete",
    //   {id: keyId}
    // );

    // console.log("klyucheviki", data);

    // return data;
  }
);

// export const signIn = createAsyncThunk(
//   "/user/login",
//   async (authData: IAuthData) => {
//     const { data }: AxiosResponse = await http.post(SIGN_IN_URL, authData);
//     console.log("data", data);

//     return data;
//   }
// );

// export const login = createAsyncThunk(
//   "/user/login",
//   async (authData: IAuthData) => {
//     const { data }: AxiosResponse = await http.post(`/user/login`, {
//       authData,
//     });
//     console.log("data", data);

//     return data;
//   }
// );
