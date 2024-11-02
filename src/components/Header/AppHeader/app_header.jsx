import {Input, Button} from 'antd';
import {useNavigate} from "react-router-dom";
import HeaderAvatar from "@/components/Avatar/HeaderAvatar/header_avatar";
import {Header} from "antd/es/layout/layout";
import "./app_header.css"
import logo from "@/assets/images/logo.png";
import LocationTab from "@/components/Location/LocationTab/location_tab";
import classNames from "classnames";
const { Search } = Input;

function AppHeader({onlyShowLogo}) {
    const navigate = useNavigate();
    return <Header className="app-header">
        <LocationTab/>
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
            <Button
                className="btn-publish"
                onClick={() => navigate("/publish")}
                type={"primary"}
                danger
            >
                出品
            </Button>
        </div>
    </Header>
}

export default AppHeader;