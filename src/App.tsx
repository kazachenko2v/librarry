import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MainPage, ErrorPage, BookPage } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:bookId",
      element: <BookPage />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: "/librarry" }
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
