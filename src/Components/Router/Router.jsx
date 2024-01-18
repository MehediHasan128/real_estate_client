import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Test from "../Test";
import AllProperties from "../Pages/AllProperties/AllProperties/AllProperties";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyProfile from "../Pages/UserProfile/MyProfile/MyProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/allProperties',
                element: <AllProperties />
            },
            {
                path: '/test',
                element: <Test />
            },
            {
                path: '/myProfile',
                element: <MyProfile />
            }
        ]
    }
]);

export default router;