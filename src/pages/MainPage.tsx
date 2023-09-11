import { BooksList, Header } from "../components";
import { useGetBooks } from "../hooks/useGetBooks";
import ErrorPage from "../pages/ErrorPage";

const MainPage: React.FC = () => {
  const { books, isError, isLoading, isSuccess } = useGetBooks();

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="min-h-full flex flex-col">
      <Header booksCount={books?.totalItems} />
      <BooksList
        books={books}
        isError={isError}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default MainPage;
