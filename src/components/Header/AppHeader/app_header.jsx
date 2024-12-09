import {Input, Button, Dropdown} from 'antd';
import {useNavigate} from "react-router-dom";
import HeaderAvatar from "@/components/Avatar/HeaderAvatar/header_avatar";
import {Header} from "antd/es/layout/layout";
import "./app_header.css"
import logo from "@/assets/images/logo.png";
import LocationTab from "@/components/Location/LocationTab/location_tab";
import classNames from "classnames";
import React from "react";
const { Search } = Input;

function AppHeader({onlyShowLogo}) {
    const navigate = useNavigate();
    const items = [
        {
            label: <div onClick={()=>navigate(`/publish/sell`)}>コレ売りたい</div>,
            key: '0',
        },
        {
            label: <div onClick={()=>navigate(`/publish/buy`)}>コレ買いたい</div>,
            key: '1',
        }]
    return <Header className="app-header">
        <LocationTab onlyShowLogo={onlyShowLogo}/>
        <img
            className="logo-click-home"
            src={logo}
            alt={"Logo for click back home."}
            onClick={() => navigate('/')}
        />
        <Search
            className={classNames({
                "search-bar": true,
                "invisible": onlyShowLogo,
            })}
            placeholder="物、サービスを探す"
            // onSearch={onSearch}
        />
        <div className={classNames({
            "header-btn-div": true,
            "invisible": onlyShowLogo,
        })}>
            <HeaderAvatar/>
            <Dropdown className={"avatar-dropdown"} menu={{ items }} trigger={['click']}>
                <Button
                    className="btn-publish"
                    type={"primary"}
                    danger
                >
                    ポスト
                </Button>
            </Dropdown>
        </div>
    </Header>
}

export default AppHeader;