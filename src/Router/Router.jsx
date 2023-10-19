import {createBrowserRouter} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import LogIn2 from "../components/LogIn2/LogIn2";
import Register2 from "../components/Register2/Register2";
import AddProduct from "../components/AddProduct/AddProduct";
import EachBrand from "../components/EachBrand/EachBrand";
import EachProduct from "../components/EachProduct/EachProduct";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch('/brands.json')
        },
        {
          path: "/home/:brandName",
          element: <EachBrand></EachBrand>
        },
        {
          path: "/product/:id",
          element: <EachProduct></EachProduct>,
          loader: ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/login2",
          element: <LogIn2></LogIn2>,
        },
        {
          path: "/register2",
          element: <Register2></Register2>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/addproduct",
          element: <AddProduct></AddProduct>
        },
      ],
    },
  ]);

  export default router;