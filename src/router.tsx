import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import DestinationPage from "./pages/Destination";
import CrewPage from "./pages/Crew";
import TechnologyPage from "./pages/Technology";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/destination',
    element: <DestinationPage />,
  },
  {
    path: '/crew',
    element: <CrewPage />,
  },
  {
    path: '/technology',
    element: <TechnologyPage />
  }
])
