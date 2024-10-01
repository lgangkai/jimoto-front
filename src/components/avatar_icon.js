import React, {useState} from 'react';
import { DownOutlined } from '@ant-design/icons';
import {Button, Dropdown, Space} from 'antd';
import avatar_not_login from "../assets/images/avatar_not_login.png";
import {getUserIdIfIsLogin} from "../utils/auth";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const AvatarIcon = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: <div>基本情報</div>,
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
                axios.post("http://localhost:8080/api/account/logout").then((data) => {
                    window.location.reload();
                }).catch((err)=>console.log(err));
            }
            }>ログアウト</div>,
            key: '4',
        },
    ];
    const [uId, setUId] = useState(-1)
    getUserIdIfIsLogin().then((data)=>setUId(data))
    return <Dropdown
        menu={{
            items,
        }}
        trigger={['click']}
    >
        <Button icon={<img src={avatar_not_login} style={{width: 32, display: 'flex'}}/>} shape={"circle"} style={{
            marginLeft: 10 + 'px',
        }}
        onClick={uId===-1?() => navigate('/login'):()=>{}} />
    </Dropdown>
};
export default AvatarIcon;