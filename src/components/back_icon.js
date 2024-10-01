import Login from "../pages/login";
import {LeftOutlined} from "@ant-design/icons";
import React from "react";
import {useNavigate} from "react-router-dom";

function BackIcon() {
    const navigate = useNavigate();
    return <LeftOutlined style={{marginLeft:30,fontSize:20}} onClick={() => navigate(-1)}/>
}

export default BackIcon;