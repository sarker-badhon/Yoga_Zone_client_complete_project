
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

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
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
          path:'allclass',
          element:<AllClass></AllClass>,
          loader:()=> fetch('http://localhost:5000/allClasses')
        },
        {
          path:'InstructorsPage',
          element:<InstructorsPage></InstructorsPage>,
          loader:()=> fetch('http://localhost:5000/instructors')
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>, 
      children: [
        {

        }
      ]
    },
    {
      path:'/*',
      element:<ErrorPage></ErrorPage>
    }
  ]);