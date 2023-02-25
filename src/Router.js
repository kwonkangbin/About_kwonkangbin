import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Deed from "./Pages/Deed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
       { path: "/image/AZ-900.png", element: <Deed />},
    ],
  },
]);

export default router;
