import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "../../store";

export const SelectTags = (state: rootState) => state.tagsCard;

// export const SelectFilter = (state: rootState) => state.tags;
export const selectTagsMass = (id: number) =>
  createSelector(SelectTags, (state) => {
    if (state !== undefined && state) {
      const find = state && state?.find((select) => select.id === id);
      if (find !== undefined) {
        return find.mass;
      }
    }
  });
