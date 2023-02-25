import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Deed from "./Pages/Deed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //    { path: "image/AZ-900", element: <Deed />},
    // ],
  },
  { 
    path: "/Certificate/AZ-900", 
    element: <Deed props="AZ"/>,
  },
  { 
    path: "/Certificate/SQLD", 
    element: <Deed props="SQLD"/>,
  },
  { 
    path: "/Experiences/PNU", 
    element: <Deed props="PNU"/>,
  },
]);

export default router;
