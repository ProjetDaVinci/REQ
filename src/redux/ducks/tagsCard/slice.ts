import { TagsItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";

const initialState: TagsItem[] = [
  { id: 12321321321321, mass: [] },
] as TagsItem[];

const tagsCard = createSlice({
  initialState,
  name: "tagsCard",
  reducers: {
    addTags(state, { payload }: PayloadAction<{ id: number; name: string }>) {
      if (payload) {
        const itemfind = state.find((item) => item.id === payload.id);
        if (itemfind !== undefined) {
          itemfind.mass.push(payload.name);
          return state;
        } else if (itemfind === undefined) {
          const mass: string[] = [payload.name];
          const newObj = { id: payload.id, mass: mass };
          state.push(newObj);
          return state;
        }
        return state;
      }
    },
    deleteTags(
      state,
      { payload }: PayloadAction<{ id: number; name: string }>
    ) {
      if (payload) {
        const index = state.find((item) => item.id === payload.id);

        if (index !== undefined) {
          const deleted = index.mass.findIndex((n) => n === payload.name);
          index.mass.splice(deleted, 1);

          return state;
        }
        // return state;
      }
    },
  },
});

const reducer = tagsCard.reducer;
const actions = { ...tagsCard.actions };

export { reducer, actions };
