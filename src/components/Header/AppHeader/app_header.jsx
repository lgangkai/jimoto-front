import {Input, Button} from 'antd';
import {useNavigate} from "react-router-dom";
import HeaderAvatar from "../../Avatar/HeaderAvatar/header_avatar";
import {Header} from "antd/es/layout/layout";
import "./app_header.css"
import logo from "../../../assets/images/logo.png";
import LocationTab from "../../Location/LocationTab/location_tab";
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
            placeholder="物、サービスを探す"
            // onSearch={onSearch}
            style={onlyShowLogo ? {width: 600, visibility: 'hidden'} : {width: 600, visibility: 'visible'}}
        />
        <div style={onlyShowLogo ? {display: 'flex', visibility: 'hidden'} : {display: 'flex', visibility: 'visible'}}>
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