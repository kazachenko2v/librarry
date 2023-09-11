import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/books/books.api";
import { Spin, Image } from "antd";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ErrorPage } from ".";

import NoLogo from "../assets/no_logo.jpg";

const BookPage: React.FC = () => {
  const { bookId } = useParams() as { bookId: string };
  const descriptionRef = React.useRef<HTMLDivElement | null>(null);

  const {
    data: book,
    isError,
    isLoading,
    isSuccess,
  } = useGetBookByIdQuery(bookId);

  React.useEffect(() => {
    if (isSuccess && book.volumeInfo.description) {
      let doc = new DOMParser().parseFromString(
        book.volumeInfo.description,
        "text/html"
      );
      descriptionRef.current &&
        descriptionRef.current.prepend(doc.body.firstChild!);
    }

    return () => {
      descriptionRef.current = null;
    };
  }, [isSuccess]);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="h-full grid gap-5 justify-items-stretch grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 items-center">
      {isLoading && <Spin size="large" className="col-span-2" />}
      {isSuccess && (
        <>
          <Image
            className="object-contain sm:h-full"
            height={"100%"}
            width={"100%"}
            src={book.volumeInfo?.imageLinks?.small}
            alt={book.volumeInfo.title}
            fallback={NoLogo}
            placeholder={<Skeleton height={"100%"} />}
          />
          <div className="">
            <h1 className="text-3xl font-extrabold">
              {book.volumeInfo.title ?? "None"}
            </h1>
            <p>{book.volumeInfo.authors?.join(", ") ?? "None"}</p>
            <div className="line-clamp-5" ref={descriptionRef}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookPage;
