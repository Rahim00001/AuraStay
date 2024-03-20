import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RoomDetiles from "../pages/RoomDetiles/RoomDetiles";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../api/rooms";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/Dashboard/Host/AddRoom";
import MyListings from "../pages/Dashboard/Host/MyListings";
import HostRoute from "./HostRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/room/:id',
                element: <PrivateRoute><RoomDetiles></RoomDetiles></PrivateRoute>,
                loader: ({ params }) => getRoom(params.id)
            }
        ],
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
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'add-room',
                element:
                    <PrivateRoute>
                        <HostRoute>
                            <AddRoom></AddRoom>
                        </HostRoute>
                    </PrivateRoute>
            },
            {
                path: 'my-listings',
                element:
                    <PrivateRoute>
                        <HostRoute>
                            <MyListings></MyListings>
                        </HostRoute>
                    </PrivateRoute>
            }
        ]
    }
]);