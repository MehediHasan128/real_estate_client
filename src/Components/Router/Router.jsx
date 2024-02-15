import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Test from "../Test";
import AllProperties from "../Pages/AllProperties/AllProperties/AllProperties";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserLayout from "../Layout/UserLayout";
import Profile from "../Pages/UserProfile/Profile/Profile";
import PrivetRoute from "./PrivetRoute";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import BuyerProfile from "../Pages/BuyerDashBoard/BuyerProfile/BuyerProfile";
import AdminProfile from "../Pages/AdminDashBoard/AdminProfile/AdminProfile";
import AgentLayout from "../Layout/AgentLayout";
import AddProperties from "../Pages/AgentDashBoard/AddProperties/AddProperties";
import AgentProfile from "../Pages/AgentDashBoard/AgentProfile/AgentProfile";
import MyProperties from "../Pages/AgentDashBoard/MyProperties/MyProperties";

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
                element: <PrivetRoute><AllProperties /></PrivetRoute>
            },
            {
                path: '/propertyDetails',
                element: <PropertyDetails />
            },
            {
                path: '/test',
                element: <Test />
            }
        ]
    },
    {
        path: '/adminDashBoard',
        element: <AdminProfile />
    },
    {
        path: '/agentDashBoard',
        element: <AgentLayout />,
        children: [
            {
                path: '/agentDashBoard/agentProfile',
                element: <AgentProfile />,
            },
            {
                path: '/agentDashBoard/addProperties',
                element: <AddProperties />
            },
            {
                path: '/agentDashBoard/myProperties',
                element: <MyProperties />
            }
        ]
    },
    {
        path: '/buyerDashBoard',
        element: <BuyerProfile />
    },
    {
        path: '/myProfile',
        element: <UserLayout />,
        children: [
            {
                path: '/myProfile',
                element: <Profile />,
            }
        ]
    }
]);

export default router;