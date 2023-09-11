import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "../../types";

const initialState: FilterSliceState = {
  search: "",
  category: "",
  orderBy: "relevance",
  index: 0,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.index = 0;
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.index = 0;
      state.category = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.index = 0;
      state.orderBy = action.payload;
    },
    setIndex: (state, action: PayloadAction<number>) => {
      state.index += action.payload;
    },
    setFilters: (state) => {
      state.search = "";
      state.category = "";
      state.orderBy = "relevance";
      state.index = 0;
    },
  },
});

export const { actions: filtersActions, reducer: filtersReducer } =
  filtersSlice;
