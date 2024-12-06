import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getUserIdIfIsLogin} from "@/utils/auth";
import {Button, Dropdown} from "antd";
import avatar_not_login from "@/assets/images/avatar_not_login.png";
import './header_avatar.css';
import "@/style/base.css"
import {useDispatch} from "react-redux";
import {clearUserInfo} from "@/store/modules/user";

function HeaderAvatar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(clearUserInfo())
        window.location.reload()
    }
    const items = [
        {
            label: <div onClick={()=>navigate(`/profile/${uId}`)}>基本情報</div>,
            key: '0',
        },
        {
            label: <div onClick={()=>navigate(`/transaction-list`)}>取引一覧</div>,
            key: '1',
        },
        {
            label: <div onClick={()=>navigate('/like-list')}>いいねリスト</div>,
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: <div onClick={()=>handleLogout()}>ログアウト</div>,
            key: '4',
        },
    ];
    const [uId, setUId] = useState(-1)
    useEffect(() => {
        getUserIdIfIsLogin().then((data)=> {
            setUId(data)
        })
    }, [])
    return <Dropdown className={"avatar-dropdown"} menu={{ items }} trigger={['click']}>
        <Button
            className="avatar-btn"
            icon={<img className="avatar-small" alt={"avatar_not_login"} src={avatar_not_login}/>}
            shape={"circle"}
            onClick={uId === -1 ? () => navigate('/login') : () => {}}
        />
    </Dropdown>
}

export default HeaderAvatar;