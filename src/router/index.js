import {useRoutes} from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ItemDetail from "../pages/item_detail";
import PrivateRouter from "./private_router";
import RegisterSuccess from "../pages/register_success";
import Publish from "../pages/Publish/publish";
import LikeList from "../pages/LikeList/like_list";
import Profile from "../pages/Profile/profile";
import ProfileEdit from "../pages/ProfileEdit/profile_edit";

const routes = [
    {
        path: "/",
        element: (<Home></Home>)
    },
    {
        path: "/login",
        element: (<Login ></Login >)
    },
    {
        path: "/register",
        element: (<Register ></Register >)
    },
    {
        path: "/item_detail/:id",
        element: (<ItemDetail></ItemDetail>)
    },
    {
        path: "/publish",
        element: (<PrivateRouter><Publish></Publish></PrivateRouter>)
    },
    {
        path: "/register-success",
        element: (<RegisterSuccess></RegisterSuccess>)
    },
    {
        path: "/like-list",
        element: (<LikeList></LikeList>)
    },
    {
        path: "/profile/:user_id",
        element: (<Profile></Profile>)
    },
    {
        path: "/profile-edit",
        element: (<ProfileEdit></ProfileEdit>)
    }
];

export default function RouterView() {
    return useRoutes(routes);
}
