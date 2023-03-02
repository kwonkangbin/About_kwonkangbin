import { createBrowserRouter } from "react-router-dom";
import App from "./App"
<<<<<<< HEAD
import ErrorPage from "./Pages/error";
import Deed from "./Pages/Deed.js";
=======
import Deed from "./Pages/Deed";
>>>>>>> parent of 2bdf07f (어질어질하네)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
<<<<<<< HEAD
    errorElement: <ErrorPage />,
=======
    // children: [
    //    { path: "image/AZ-900", element: <Deed />},
    // ],
>>>>>>> parent of 2bdf07f (어질어질하네)
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
