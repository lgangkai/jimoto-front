import { message } from "antd";
import {Navigate} from "react-router-dom";
import {getToken} from "@/utils";

const AuthRouter = ({ children }) => {
    const token = getToken()
    if (token) {
        return <>{children}</>;
    } else {
        message.warning("ログインの有効期限が切れました。再度ログインしてください。");
        return <Navigate to={`/login`} replace/>
    }
};

export default AuthRouter;