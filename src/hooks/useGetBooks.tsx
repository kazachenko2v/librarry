import { useGetBooksQuery } from "../redux/books/books.api";
import { useAppSelector } from "../hooks/useActionCreactors";

const useGetBooks = () => {
  const { search, category, index, orderBy } = useAppSelector(
    (state) => state.filters
  );

  const {
    data: books,
    isError,
    isLoading,
    isSuccess,
  } = useGetBooksQuery({
    q: `${search}+subject:${category}`,
    index,
    orderBy,
  });
  return { books, isError, isLoading, isSuccess };
};

export { useGetBooks };
