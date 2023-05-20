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
          path:'/addatoy',
            element:<AddAToy></AddAToy>

        },
        {
          path:'/alltoys',
            element:<AllToys></AllToys>

        },
        {
          path:'/mytoys',
            element:<MyToys></MyToys>

        },
        {
          path: '/updetetoys/:id',
          element: <UpdeteToys></UpdeteToys>,
          loader: ({params})=>fetch(`http://localhost:5000/allToys/${params.id}`)
        }
      ]
    },
  ]);
export default router;  