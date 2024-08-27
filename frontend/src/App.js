import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components/user/getuser/User";
import Add from "./components/user/adduser/Add";
import Edit from "./components/user/updateuser/Edit";
import Master from "./components/layouts/Master";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Category from "./components/category/Category";
import Login from "./components/auth/Login";
import axios from "axios";


function App() {



console.log(process.env.VARIABLE_NAME);

axios.defaults.baseURL = process.env.REACT_API_BASE_URL;

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Master />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/edit/:id",
          element: <Edit />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Add />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
