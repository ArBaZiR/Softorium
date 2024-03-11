//
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
//
import MainPage from "../Pages/MainPage";
// Pages
import Vacancy from "../Pages/Vacancy";

export default function App() {
  //

  const routes = createBrowserRouter([
    {
      element: <MainPage />,
      children: [
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
        {
          path: "/",
          element: <Vacancy />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
