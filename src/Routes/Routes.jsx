import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddAToy from "../Components/AddAToy/AddAToy";
import AllToys from "../Components/AllToys/AllToys";
import MyToys from "../Components/MyToys/MyToys";
import UpdeteToys from "../Components/UpdeteToys/UpdeteToys";
import ToyDetails from "../Components/ToyDetails/ToyDetails";
import Blog from "../Components/Blog/Blog";
import PrivetRouts from "./PrivetRouts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
            element:<Login></Login>

        },
        {
          path:'/register',
            element:<Register></Register>

        },
        {
          path:'/blog',
            element:<Blog></Blog>

        },
        {
          path:'/addatoy',
            element:<PrivetRouts><AddAToy></AddAToy></PrivetRouts>

        },
        {
          path:'/alltoys',
            element:<AllToys></AllToys>

        },
        {
          path:'/mytoys',
            element:<PrivetRouts><MyToys></MyToys></PrivetRouts>

        },
        {
          path: '/updetetoys/:id',
          element: <UpdeteToys></UpdeteToys>,
          loader: ({params})=>fetch(`https://b7a11-toy-marketplace-server-side-jewelislam360.vercel.app/allToys/${params.id}`)
        },
        {
          path: '/ToyDetails/:id',
          element: <ToyDetails></ToyDetails>,
          loader: ({params})=>fetch(`https://b7a11-toy-marketplace-server-side-jewelislam360.vercel.app/allToys/${params.id}`)
        }
      ]
    },
  ]);
export default router;  