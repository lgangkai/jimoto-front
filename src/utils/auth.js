import Cookies from "js-cookie";
import store from "../store";
import axios from "axios";

async function getUserIdIfIsLogin() {
    return await axios.get("http://localhost:8080/api/account/user/id").then((data)=>JSON.parse(data.data.data).user_id).catch((err)=>-1)
}

export { getUserIdIfIsLogin }
