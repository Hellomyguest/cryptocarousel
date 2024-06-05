import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MainPage,
  BitSpinPage,
  ReferralPage,
  LessonsPage,
} from "./pages";
import "./App.css"

window.Buffer = window.Buffer || require("buffer").Buffer;

export const routes = [
  {
    path: "/",
    element: <MainPage />,
    breadcrumb: "Главная",
  },
  {
    path: "/Games",
    breadcrumb: "Игры",
    children: [
      {
        path: "/Games/BitSpin",
        element: <BitSpinPage />,
        breadcrumb: "Bit Spin",
      },
    ],
  },
  {
    path: "/Referral",
    element: <ReferralPage />,
    breadcrumb: "Реферальная программа",
  },
  {
    path: "/programs",
    element: <LessonsPage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
