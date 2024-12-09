import {useRoutes} from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import ItemDetail from "../pages/ItemDetail/item_detail";
import AuthRouter from "./auth_router";
import RegisterSuccess from "../pages/Register/RegisterSuccess/register_success";
import Publish from "../pages/Publish/publish";
import LikeList from "../pages/LikeList/like_list";
import Profile from "../pages/Profile/profile";
import ProfileEdit from "../pages/ProfileEdit/profile_edit";
import TransactionConfirm from "@/pages/Transaction/TransactionConfirm/transaction_confirm";
import TransactionList from "@/pages/TransactionList/transaction_list";

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
        path: "/publish/:type",
        element: (<AuthRouter><Publish></Publish></AuthRouter>)
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
    },
    {
        path: "/transaction-list",
        element: (<AuthRouter><TransactionList></TransactionList></AuthRouter>)
    },
    {
        path: "*",
        element: (<div>404 not found</div>)
    }
];

export default function RouterView() {
    return useRoutes(routes);
}
