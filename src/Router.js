import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Deed from "./Pages/Deed.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { 
    path: "ViewDetail/:id",
    element: <Deed />
  },
]);

export default router;
