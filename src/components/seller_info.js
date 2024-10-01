import {Avatar, Flex} from "antd";
import avatar_not_login from "../assets/images/avatar_not_login.png";
import {RightOutlined} from "@ant-design/icons";
import {useState} from "react";

function SellerInfo() {
    const [isHover, setIsHover] = useState(false)
    return <Flex
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        style={isHover?{
            width: "50%",
            height: "100%",
            padding: 10,
            backgroundColor: "#ebebeb",
            cursor: "pointer",
            alignItems: "center",
    }:{
            width: "50%",
            height: "100%",
            padding: 10,
            cursor: "pointer",
            alignItems: "center",
        }}>
        <Avatar src={avatar_not_login} style={{
            height: 50,
            width: 50,
        }}/>
        <Flex vertical gap={10} style={{
            // backgroundColor: "gray",
            marginLeft: 10,
        }}>
            <div style={{
                fontSize: 20,
                fontWeight: "bold",
            }}>yuki.N</div>
            <div>卖家信用极高</div>
        </Flex>
        <RightOutlined style={{
            display: "flex",
            height: "100%",
            justifyContent:"flex-end"
        }}/>
    </Flex>
}

export default SellerInfo