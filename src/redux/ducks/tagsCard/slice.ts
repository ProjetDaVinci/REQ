import { TagsItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import { getListProposalTags, updatesTagsProposal } from "./thunks";
import { getProposalList } from "../proposal/thunks";
import { ProposalRes } from "../proposal/types";

const initialState: TagsItem[] = [] as TagsItem[];

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
  extraReducers: (builder) => {
    builder.addCase(
      getListProposalTags.fulfilled,
      (state, { payload }: PayloadAction<ProposalRes>) => {
        for (let i = 0; i < payload.data.length - 1; i++) {
          const index = state?.find((item) => item.id === payload.data[i].id);
          if (index !== undefined) {
            console.log(
              ' payload.data[i].zametki.split(",")',
              payload.data[i].zametki.split(",")
            );
            index.mass === payload.data[i].zametki.split(",");

            return state;
          }
          if (index === undefined) {
            const newObj = {
              id: payload.data[i].id,
              mass: payload.data[i].zametki.split(","),
            };
            console.log(
              ' payload.data[i].zametki.split(",")',
              payload.data[i].zametki.split(",")
            );
            state?.push(newObj);

            return state;
          }
        }
      }
    );
    builder.addCase(getListProposalTags.rejected, () => {
      return initialState;
    });
  },
});

const reducer = tagsCard.reducer;
const actions = { ...tagsCard.actions };

export { reducer, actions };
