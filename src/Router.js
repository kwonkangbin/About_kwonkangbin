import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import ErrorPage from "./Pages/error";
import Deed from "./Pages/Deed.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //    { path: "image/AZ-900", element: <Deed />},
    // ],
  },
  { 
    path: "/ViewDetail/:id", 
    element: <Deed/>,
  },
]);

export default router;
