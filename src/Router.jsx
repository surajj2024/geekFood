import LayOut from "./components/LayOut.jsx";
import Qoute from "./components/Qoute.jsx";
import HomePage from "./components/HomePage.jsx";
import { createBrowserRouter } from "react-router-dom";
import Restaurent from "./components/Restaurent.jsx";
import Foods from "./components/Foods.jsx";
import DynamicFood from "./components/DynamicFood.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "/", element: <HomePage /> },

      { path: "qoute", element: <Qoute /> },
      { path: "restaurent", element: <Restaurent /> },
      { path: "food", element: <Foods />, },
      { path: "fooditem/:id", element: <DynamicFood /> }
    
    ],

    errorElement: <h1>Not Found</h1>,
  },
]);
export default router;
