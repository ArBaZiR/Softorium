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
import VacancyInfo from "../Pages/VacancyInfo";
import { array } from "../FakeBd";
//
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
        array.length
          ? {
              path: "info/:vacancyId",
              element: <VacancyInfo />,
            }
          : {},
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
