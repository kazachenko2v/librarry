import { ActionCreator } from "@reduxjs/toolkit";

export interface Books {
  totalItems: number;
  items: Book[];
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  imageLinks: { thumbnail: string; small: string };
  description?: string;
  categories?: string[];
  authors?: string[];
}

export interface FilterSliceState {
  search: string;
  category: string;
  orderBy: string;
  index: number;
}

export type RequestQuery = Pick<FilterSliceState, "orderBy" | "index"> & {
  q: string;
};

export interface BooksListProps {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  books: Books | undefined;
}

export interface HeaderProps {
  booksCount: number | undefined;
}

export interface SearchProps {
  action: ActionCreator<any>;
}

export type SortProps = SearchProps & {
  label: string;
  defaultValue: string;
  options: { value: string; label: string }[];
};
