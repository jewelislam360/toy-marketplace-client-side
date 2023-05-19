import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AddAToy from "../Components/AddAToy/AddAToy";

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

        }
      ]
    },
  ]);
export default router;  