import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ItemDetail from "../pages/item_detail";
import PrivateRouter from "./private_router";
import RegisterSuccess from "../pages/register_success";
import Publish from "../pages/publish";
import LikeList from "../pages/like_list";

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
];

export default function RouterView() {
    const elem = useRoutes(routes);
    return elem;
}
