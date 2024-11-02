import classNames from "classnames";
import {WarningOutlined} from "@ant-design/icons";
import React from "react";
import "./form_submit_error_message.css"

function FormSubmitErrorMessage({message}) {
    return <div className={classNames({
        "form-warning-message": true,
        "invisible": message === ""
    })}>
        <WarningOutlined/> {message}
    </div>
}

export default FormSubmitErrorMessage;