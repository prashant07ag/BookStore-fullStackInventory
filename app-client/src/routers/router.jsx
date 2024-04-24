import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../component/About";
import Blog from "../component/Blog";
import SingleBook from "../component/SingleBook";
import Shop from "../shop/Shop"
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../component/SignUp";
import Signin from "../component/Signin";
import PrivateRoute from "./PrivateRoute";
import Logout from "../component/Logout";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/book/:id',
            element: <SingleBook/>,
            loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
        },
    ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>, 
        children:[
            {
                path: '/admin/dashboard',
                element: <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadBooks/>
            },
            {
                path: '/admin/dashboard/manage',
                element: <ManageBooks/>
            },
            {
                path: '/admin/dashboard/edit-book/:id',
                element: <EditBooks/>,
                loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
            }
            
        ]   
    },
    {
        path: "sign-up",
        element: <SignUp/>
    },
    {
        path: "login",
        element: <Signin/>
    },
    {
        path: "logout",
        element: <Logout/>
    }
]);
  
export default router;