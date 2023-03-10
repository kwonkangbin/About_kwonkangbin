import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import ErrorPage from "./Pages/Error";
import Deed from "./Pages/Deed.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "ViewDetail/:id",
    element: <Deed />
  },
]);

export default router;
