import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";
import { KlyuchevikiQue, KlyuchevikiUpd } from "./types";

export const getListKeys = createAsyncThunk(
  "/klyucheviki/get-list",
  async () => {
    const { data }: AxiosResponse = await http.post("/klyucheviki/get-list", {
      limit: 20,
      offset: 0,
    });

    return data;
  }
);

export const deleteKeys = createAsyncThunk(
  "/klyucheviki/delete",
  async (keyId: number) => {
    const { data }: AxiosResponse = await http.delete("/klyucheviki/delete", {
      data: { id: keyId },
    });

    return data;
  }
);

export const addKeys = createAsyncThunk(
  "/klyucheviki/create",
  async (item: KlyuchevikiQue) => {
    const { data }: AxiosResponse = await http.post(
      "/klyucheviki/create",
      item
    );

    return data;
  }
);

export const updateKeys = createAsyncThunk(
  "/klyucheviki/update",
  async (item: KlyuchevikiUpd) => {
    const { data }: AxiosResponse = await http.put("/klyucheviki/update", item);
    console.log("/klyucheviki/update", data);

    return data;
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
