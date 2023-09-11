import React from "react";
import { Link } from "react-router-dom";
import { Spin, Button, Image } from "antd";
import { useActionCreators, useAppSelector } from "../hooks/useActionCreactors";
import { filtersActions } from "../redux/filters/slice";
import { MAX_RESULTS } from "../constants/api";
import { BooksListProps } from "../types";
import NoLogo from "../assets/no_logo.jpg";
import { getIndex } from "../redux/filters/selectors";

const BooksList: React.FC<BooksListProps> = ({
  books,
  isLoading,
  isSuccess,
}) => {
  const actions = useActionCreators(filtersActions);
  const index = useAppSelector(getIndex);

  return (
    <div className="grow h-full flex flex-col">
      <div className="grow text-center relative">
        {isLoading && (
          <Spin className="absolute top-1/2 -translate-y-1/2" size="large" />
        )}
        {isSuccess && books && books.items?.length ? (
          <div className="grow grid gap-4 auto-rows-[350px] grid-cols-4">
            {books.items.map((book, i) => (
              <Link
                className="col-span-4 md:col-span-1 sm:col-span-2 bg-gray-300 p-3 relative shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                key={book.id + i}
                to={book.id}
              >
                <div className="h-2/4 mb-4">
                  <Image
                    height={"100%"}
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={book.volumeInfo.title}
                    fallback={NoLogo}
                    preview={false}
                    placeholder
                  />
                </div>
                <p className="underline text-gray-500 mb-3 line-clamp-1">
                  {book.volumeInfo.categories
                    ? book.volumeInfo.categories[0]
                    : "None"}
                </p>
                <h3 className="line-clamp-3 text-xl font-bold">
                  {book.volumeInfo.title ?? "None"}
                </h3>
                <p className="line-clamp-1 absolute bottom-2.5">
                  {book.volumeInfo.authors ?? "-"}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <h1 className="text-xl font-bold">Nothing could be found.</h1>
        )}
      </div>
      <Button
        className="my-4"
        size="large"
        loading={isLoading}
        block
        disabled={
          books &&
          (books.totalItems <= MAX_RESULTS ||
            books.items?.length < index + MAX_RESULTS)
        }
        onClick={() => actions.setIndex(MAX_RESULTS)}
      >
        Load more...
      </Button>
    </div>
  );
};

export default BooksList;
