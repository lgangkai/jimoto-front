import axios from "axios";
import {getUserId} from "@/apis/user";

async function getUserIdIfIsLogin() {
    return getUserId().then((data)=>JSON.parse(data.data).user_id).catch((err)=>-1)
    // return await axios.get("http://localhost:8080/api/account/user/id").then((data)=>JSON.parse(data.data.data).user_id).catch((err)=>-1)
}

export { getUserIdIfIsLogin }
