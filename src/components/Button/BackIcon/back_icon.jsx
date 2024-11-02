import {LeftOutlined} from "@ant-design/icons";
import React from "react";
import {useNavigate} from "react-router-dom";
import "./back_icon.css"

function BackIcon() {
    const navigate = useNavigate();
    return <LeftOutlined
        className="back-icon"
        onClick={() => navigate(-1)}
    />
}

export default BackIcon;