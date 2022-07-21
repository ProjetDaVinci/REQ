import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";
import { TagsItem } from "./types";

export const getListTelegram = createAsyncThunk(
  "/telegram/get-list",
  async () => {
    const { data }: AxiosResponse = await http.post("/telegram/get-list", {
      limit: 20,
      offset: 0,
    });

    console.log("/telegram/get-list", data);

    return data;
  }
);

export const deleteTags = createAsyncThunk(
  "/telegram/delete",
  async (keyId: number) => {
    console.log("/telegram/delete", keyId);

    const { data }: AxiosResponse = await http.delete("/telegram/delete", {
      data: { id: keyId },
    });

    console.log("/telegram/delete", data);
  }
);

export const updatesTagsProposal = createAsyncThunk(
  "/proposal/update-tags",
  async (id: number, { getState }) => {
    const { tagsCard } = getState() as { tagsCard: TagsItem[] };

    const zametki = tagsCard.find((zam) => zam.id === id);

    const { data }: AxiosResponse = await http.put("/proposal/update", {
      id: id,
      zametki: zametki?.mass.join(),
    });
    console.log("/proposal/update-tags", data);

    // console.log("/proposal/delete", id);

    // return data;
  }
);

export const updateProposal = createAsyncThunk(
  "/proposal/update",
  async (item: { id: number; status: string }) => {
    const { data }: AxiosResponse = await http.put("/proposal/update", item);

    // return data;
  }
);
