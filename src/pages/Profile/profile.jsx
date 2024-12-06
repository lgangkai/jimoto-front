import AppHeader from "@/components/Header/AppHeader/app_header";
import {Button, Divider, Flex, Image, Row} from "antd";
import avatar_not_login from "@/assets/images/avatar_not_login.png";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./profile.css"
import "@/style/base.css"
import {getProfile} from "@/apis/user";
import {getUserSoldCommodities} from "@/apis/commodity";
import Item from "@/pages/Profile/Components/Item/item";
import BackIcon from "@/components/Button/BackIcon/back_icon";

function Profile() {
    document.title = "プロフィール"
    const userId = useParams()["user_id"]
    const navigate = useNavigate();
    const [profile, setProfile] = useState({})
    const [soldCommodities, setSoldCommodities] = useState([])
    useEffect(() => {
        getProfile(
            {user_id: userId},
            (data) => {
                setProfile(data)
            }
        )
        getUserSoldCommodities(
            (data) => {
                setSoldCommodities(data)
            }
        )
    }, [userId]);
    return <Flex vertical={true}>
        <AppHeader onlyShowLogo={false}></AppHeader>
        <BackIcon/>
        <div className="layout-content-center-vertical">
            <div className="profile-base-info">
                <img className="avatar-big" src={profile.avatar===undefined?avatar_not_login:profile.avatar} alt=""/>
                <Flex className="profile-name-div" vertical={true} gap={10}>
                    <div className="text-title-h1">
                        {profile.username===undefined?"名前無し":profile.username}
                    </div>
                    <div>卖家信用极高</div>
                </Flex>
                <Flex className="profile-btn-div">
                    <Button
                        className="profile-btn"
                        type={"primary"}
                        danger
                        onClick={()=>navigate("/profile-edit")}
                    >
                        プロフィール編集
                    </Button>
                </Flex>
            </div>
            {profile.introduction===undefined?"自己紹介はないです。":profile.introduction}
        </div>
        <div className="profile-commodities-div">
            <Divider/>
            <Row justify="center" align="top">
                {soldCommodities.map((item, i)=>{
                    return <Item item={item}/>
                })}
            </Row>
        </div>
    </Flex>
}

export default Profile;