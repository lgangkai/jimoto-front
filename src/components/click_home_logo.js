import logo from "../assets/images/logo.png";
import {useNavigate} from "react-router-dom";
import HeaderWithSearch from "./header";

function ClickHomeLogo() {
    const navigate = useNavigate();
    return <img src={logo} style={{
        marginRight: 30+'px',
        cursor: "pointer"
    }}
    onClick={() => navigate('/')} />
}

export default ClickHomeLogo;