import {Avatar, Flex} from "antd";
import avatar_not_login from "../assets/images/avatar_not_login.png";
import {RightOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api/api";

function SellerInfo({creator_id}) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false)
    const [profile, setProfile] = useState({})
    useEffect(() => {
        API.getProfile({user_id: creator_id}).then((res)=>{
            setProfile(res)
        })
    }, [creator_id])
    return <Flex
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        onClick={()=>navigate(`/profile/${creator_id}`)}
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
        <Avatar src={profile.avatar===undefined?avatar_not_login:profile.avatar} style={{
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
            }}>{profile.username===undefined?"名前無し":profile.username}</div>
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