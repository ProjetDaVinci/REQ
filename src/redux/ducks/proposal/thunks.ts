import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";

export const getProposalList = createAsyncThunk(
  "/proposal/get-list",
  async () => {
    const { data }: AxiosResponse = await http.post("/proposal/get-list", {
      limit: 0,
      offset: 0,
    });

    console.log("/proposal/get-list", data);

    return data;
  }
);

export const updateProposal = createAsyncThunk(
  "/proposal/update",
  async (item: { id: number; status: string }) => {
    const { data }: AxiosResponse = await http.put("/proposal/update", item);

    console.log("/proposal/update", data);

    // return data;
  }
);

export const deleteProposal = createAsyncThunk(
  "/proposal/delete",
  async (id: number) => {
    const { data }: AxiosResponse = await http.delete("/proposal/delete", {
      data: { id },
    });

    console.log("/proposal/delete", data);
    console.log("/proposal/delete", id);

    // return data;
  }
);
