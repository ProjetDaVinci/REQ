import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";

export const getInfoList = createAsyncThunk(
  "/information/get-list",
  async (limit: number) => {
    const { data }: AxiosResponse = await http.post("/information/get-list", {
      limit: limit,
      offset: 0,
    });

    console.log("/information/get-list", data);

    return data;
  }
);

// export const updateInfo = createAsyncThunk(
//   "/proposal/update",
//   async (item: { id: number; status: string }) => {
//     const { data }: AxiosResponse = await http.put("/proposal/update", item);

//     console.log("/proposal/update", data);

//     // return data;
//   }
// );

export const deleteInfo = createAsyncThunk(
  "/information/delete",
  async (id: number) => {
    const { data }: AxiosResponse = await http.delete("/information/delete", {
      data: { id },
    });

    console.log("/information/delete", data);
    console.log("/information/delete", id);

    // return data;
  }
);
