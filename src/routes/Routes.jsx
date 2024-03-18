import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RoomDetiles from "../pages/RoomDetiles/RoomDetiles";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../api/rooms";

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
]);