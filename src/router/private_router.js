import { message } from "antd";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
 interface Props {
     children: ReactElement;
 }
const PrivateRouter = ({ children }: Props) => {
    const navigator = useNavigate();
     useEffect(() => {
         try {
             const token: any = Cookies.get("access_token")
             if (token === undefined) {
                 message.warning("ログインの有効期限が切れました。再度ログインしてください。");
                 navigator(`/login`);
             }
         } catch (error) {
             console.log(error)
             message.warning("エラ発生しました。再度ログインしてください。");
             navigator(`/login`);
         }
     }, []);
    return <>{children}</>;
};
 export default PrivateRouter;