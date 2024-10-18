import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {getUserIdIfIsLogin} from "../../../utils/auth";
import {Button, Dropdown} from "antd";
import avatar_not_login from "../../../assets/images/avatar_not_login.png";
import './header_avatar.css';
import API from "../../../api/api";
import "../../../style/base.css"

function HeaderAvatar() {
    const navigate = useNavigate();
    const items = [
        {
            label: <div onClick={()=>navigate('/profile')}>基本情報</div>,
            key: '0',
        },
        {
            label: <div>取引履歴</div>,
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
            label: <div onClick={() => {
                API.logout().finally(()=>window.location.reload())
            }
            }>ログアウト</div>,
            key: '4',
        },
    ];
    const [uId, setUId] = useState(-1)
    getUserIdIfIsLogin().then((data)=>setUId(data))
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