import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from './../../Pages/Register/Register';

const Routes = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/home",
            element: <Home></Home>,
         },
         {
            path: '/login', 
            element: <Login></Login>
         }, 
         {
            path: '/register', 
            element: <Register></Register>
         }, 
         {
            path: '/checkout/:id', 
            element: <PrivateRoute>
                  <CheckOut></CheckOut>
            </PrivateRoute>, 
            loader: async({params}) => fetch(`http://localhost:5000/services/${params.id}`)
         }, 
         {
            path: '/orders', 
            element: <PrivateRoute> 
                <Orders></Orders>
            </PrivateRoute>
         }
      ],
   },
]);

export default Routes;
