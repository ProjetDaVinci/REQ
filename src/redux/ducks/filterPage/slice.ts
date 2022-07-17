import { Filter, FilterItem } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigation } from "../../../constants";
import _ from "lodash";

const initialState: Filter[] = [] as Filter[];

const filter = createSlice({
  initialState,
  name: "filterPage",
  reducers: {
    addFilter(
      state,
      { payload }: PayloadAction<{ namePage: string; itemName: string }>
    ) {
      if (payload) {
        const findObj = state.find(
          (item) => item.namePage === payload.namePage
        );
        console.log("findObj", findObj);

        if (findObj) {
          let mass = findObj.mass;
          const item: FilterItem = {
            id: _.uniqueId(),
            name: payload.itemName,
          };
          // mass.push(item);
          findObj.mass.push(item);

          return state;
        } else if (findObj === undefined) {
          const item = [
            {
              id: _.uniqueId(),
              name: payload.itemName,
            },
          ];
          const obj: Filter = {
            namePage: payload.namePage,
            mass: item,
          };
          state.push(obj);
          return state;
        }
      }
      // if (state.accessToken) {
      //   state.accessToken = "";
      // }
      return state;
    },
    deleteFilter(state, { payload }: PayloadAction<{ namePage: string }>) {
      if (payload) {
        state.map((item) => item.mass === []);
        return (state = initialState);

        // const findObj = state.find(
        //   (item) => item.namePage === payload.namePage
        // );
        // console.log("findObj", findObj);

        // if (findObj) {
        //   findObj.mass = [];
        //   // let mass = findObj.mass;
        //   // const newArr = mass.find((item) => item.name !== payload.itemName);
        //   console.log("СРАБОТАЛА удаление");

        //   // if (newArr) {
        //   //   // mass = newArr;
        //   //   // return state;
        //   // }
        // }
      }
      // if (state.accessToken) {
      //   state.accessToken = "";
      // }
      return state;
    },
  },
});

const reducer = filter.reducer;
const actions = { ...filter.actions };

export { reducer, actions };
