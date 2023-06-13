
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/form/Login/Login";
import Register from "../Pages/form/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Pages/Home/Dashboard/Dashboard";
import AllClass from "../Pages/Home/AllClass/AllClass";
import InstructorsPage from "../Pages/Home/InstructorsPage/InstructorsPage";
import MySelectedClasses from "../Pages/Home/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Home/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import AddClass from "../Pages/Home/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Home/Dashboard/MyClasses/MyClasses";
import ManageClass from "../Pages/Home/Dashboard/ManageClass/ManageClass";
import ManageUser from "../Pages/Home/Dashboard/ManageUser/ManageUser";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/Home/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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
        path: 'allclass',
        element: <AllClass></AllClass>,
      },
      {
        path: 'InstructorsPage',
        element: <InstructorsPage></InstructorsPage>,
        loader: () => fetch('http://localhost:5000/instructors')
      }

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/MySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: "/dashboard/MyEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: "/dashboard/AddClass",
        element: <AddClass></AddClass>
      },
      {
        path: "/dashboard/MyClasses",
        element: <MyClasses></MyClasses>
      },
      {
        path: "/dashboard/ManageClass",
        element:<AdminRoute> <ManageClass></ManageClass></AdminRoute>
      },
      {
        path: "/dashboard/ManageUser",
        element:<AdminRoute> <ManageUser></ManageUser></AdminRoute>
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>
      },
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);