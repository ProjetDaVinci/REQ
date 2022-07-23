import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../services/http";
import { AxiosResponse } from "axios";
import { ProposalQuery } from "./types";
import { TagsItemRes } from "../tagsCard/types";

export const getProposalList = createAsyncThunk(
  "/proposal/get-list",
  async (query: ProposalQuery) => {
    const { data }: AxiosResponse = await http.post("/proposal/get-list", {
      limit: query.limit,
      offset: 0,
      query: [{ input: "status", value: query.status }],
    });
    console.log("/proposal/get-list", data);
    return data;
  }
);

export const getProposalListCategory = createAsyncThunk(
  "/proposal/get-list-category",
  async (status: string) => {
    const { data }: AxiosResponse = await http.post("/proposal/get-list", {
      limit: 30,
      offset: 0,
      query: [{ input: "status", value: status }],
    });

    console.log("/proposal/get-list-category", data);

    return data;
  }
);

export const updateProposal = createAsyncThunk(
  "/proposal/update",
  async (item: { id: number; status: string }) => {
    const { data }: AxiosResponse = await http.put("/proposal/update", item);
    console.log("/proposal/update", data);

    return data;
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

export const updatesTagsProposal = createAsyncThunk(
  "/proposal/update-tags-2",
  async (item: TagsItemRes) => {
    console.log("/proposal/update-tags_________________", item);

    const { data }: AxiosResponse = await http.put("/proposal/update", {
      id: item.id,
      zametki: item.zametki,
    });
    console.log("/proposal/update-tags", data);

    // console.log("/proposal/delete", id);

    return data;
  }
);
