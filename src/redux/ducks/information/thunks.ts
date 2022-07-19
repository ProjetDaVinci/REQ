import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";

export const getInfoList = createAsyncThunk(
  "/information/get-list",
  async () => {
    const { data }: AxiosResponse = await http.post("/information/get-list", {
      limit: 20,
      offset: 0,
    });

    console.log("/information/get-list", data);

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
