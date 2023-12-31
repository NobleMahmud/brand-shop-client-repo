import {createBrowserRouter} from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/Register/Register";
// import Register2 from "../components/Register/Register";
import AddProduct from "../components/AddProduct/AddProduct";
import EachBrand from "../components/EachBrand/EachBrand";
import EachProduct from "../components/EachProduct/EachProduct";
import LogIn from "../components/LogIn/LogIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyCart from "../components/MyCart/MyCart";
import Update from "../components/Update/Update";
import NewForm from "../components/NewForm/NewForm";

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
          element: <PrivateRoute><EachProduct></EachProduct></PrivateRoute>,
          loader: ({params})=>fetch(`https://brand-shop-server-kappa-hazel.vercel.app/product/${params.id}`)
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/addproduct",
          element: <AddProduct></AddProduct>
        },
        {
          path: "/mycart",
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: "/update/:id",
          element: <Update></Update>,
          loader: ({params})=>fetch(`https://brand-shop-server-kappa-hazel.vercel.app/update/${params.id}`)
        },
      ],
    },
  ]);

  export default router;