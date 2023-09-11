import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book, Books, RequestQuery } from "../../types";
import { BASE_URL, MAX_RESULTS } from "../../constants/api";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<Books, RequestQuery>({
      query: ({ q, index, orderBy }) => ({
        url: "?",
        params: {
          q: q,
          maxResults: MAX_RESULTS,
          startIndex: index,
          orderBy: orderBy,
          key: process.env.REACT_APP_KEY,
        },
      }),
      serializeQueryArgs: ({ endpointName }: { endpointName: string }) => {
        return endpointName;
      },
      merge: (currentCache: Books, newItems: Books, { arg }) => {
        if (arg.index > 0) {
          currentCache.items.push(...newItems?.items);
        } else {
          return newItems;
        }
      },
      forceRefetch(params) {
        return params.currentArg !== params.previousArg;
      },
    }),
    getBookById: builder.query<Book, string>({
      query: (volume) => ({
        url: `/${volume}`,
        params: {
          key: process.env.REACT_APP_KEY,
        },
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;
