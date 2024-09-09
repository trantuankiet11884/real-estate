import App from "./App";
import { PATHS } from "./lib/constant";
import {
  HomePage,
  News,
  PublicLayout,
  RentProperty,
  SoldProperty,
} from "./pages/publics";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: PATHS.PUBLICS.LAYOUT,
        element: <PublicLayout />,
        children: [
          {
            path: PATHS.PUBLICS.HOME,
            element: <HomePage />,
          },
          {
            path: PATHS.PUBLICS.NEWS,
            element: <News />,
          },
          {
            path: PATHS.PUBLICS.RENTPROPERTY,
            element: <RentProperty />,
          },
          {
            path: PATHS.PUBLICS.SOLDPROPERTY,
            element: <SoldProperty />,
          },
        ],
      },
    ],
  },
];

export default routes;
