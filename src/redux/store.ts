import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { booksApi } from "./books/books.api";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddalware) =>
    getDefaultMiddalware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
