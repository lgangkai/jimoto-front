import {Input, Avatar, Button} from 'antd';
import { Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from '../assets/images/logo.png'
import avatar_not_login from '../assets/images/avatar_not_login.png'
import {Router, useNavigate} from "react-router-dom";
import ClickHomeLogo from "./click_home_logo";
import AvatarIcon from "./avatar_icon";
import PrivateRouter from "../router/private_router";
const { Search } = Input;
const { Header} = Layout;


function HeaderWithSearch({onlyShowLogo}) {
    const navigate = useNavigate();
    return <Header
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30
        }}
    >
        <ClickHomeLogo />
        <Search
            placeholder="物、サービスを探す"
            // onSearch={onSearch}
            style={onlyShowLogo ? {width:600,visibility:'hidden'} : {width:600,visibility:'visible'}}
        />
        <div style={onlyShowLogo ? {display:'flex',visibility:'hidden'} : {display:'flex',visibility:'visible'}}>
            <AvatarIcon/>
            <Button onClick={()=>navigate("/publish")} type={"primary"} danger style={{
                marginLeft: 10+'px',
                fontSize: 17,
                fontWeight: 'bold',
            }}>
                出品
            </Button>
        </div>

    </Header>
}

export default HeaderWithSearch;