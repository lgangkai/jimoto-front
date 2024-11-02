import AppHeader from "@/components/Header/AppHeader/app_header";
import {Button, Flex} from "antd";
import avatar_not_login from "@/assets/images/avatar_not_login.png";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./profile.css"
import "@/style/base.css"
import {getProfile} from "@/apis/user";

function Profile() {
    document.title = "プロフィール"
    const userId = useParams()["user_id"]
    const navigate = useNavigate();
    const [profile, setProfile] = useState({})
    useEffect(() => {
        getProfile(
            {user_id: userId},
            (data) => {
                setProfile(data)
            }
        )
    }, [userId]);
    return <Flex vertical={true}>
        <AppHeader onlyShowLogo={false}></AppHeader>
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
    </Flex>
}

export default Profile;