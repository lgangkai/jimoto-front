import {Flex, Image} from "antd";
import avatar_not_login from "@/assets/images/avatar_not_login.png";
import {RightOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "@/style/base.css"
import "./hoverable_button.css"
import classNames from "classnames";
import {getProfile} from "@/apis/user";

function SellerInfo({creator_id}) {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false)
    const [profile, setProfile] = useState({})
    useEffect(() => {
        getProfile({user_id: creator_id}, (data)=>setProfile(data))
    }, [creator_id])
    return <Flex className={classNames({
        "hoverable-button-seller": true,
        "hovering": isHover
    })}
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        onClick={()=>navigate(`/profile/${creator_id}`)}
    >
        <Image
            preview={false}
            src={profile.avatar}
            fallback={avatar_not_login}
            height="50px"
            width="50px"
        />
        <Flex vertical gap={10} style={{marginLeft:10}}>
            <div className="text-title-h2">{profile.username===undefined?"名前無し":profile.username}</div>
            <div style={{fontSize:12}}>卖家信用极高</div>
        </Flex>
        <RightOutlined className="right-out-lined"/>
    </Flex>
}

export default SellerInfo