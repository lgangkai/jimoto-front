import {Popover, Row} from "antd";
import {CommentOutlined} from "@ant-design/icons";
import {useState} from "react";
import classNames from "classnames";
import "./hoverable_button.css"

function CommentButton({numComments}) {
    const [isHover, setIsHover] = useState(false)
    return <Popover content={<div>コメント</div>}>
        <div className={classNames({
            "hoverable-button": true,
            "hovering": isHover
        })}
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
        >
            <Row className="hoverable-button-icon">
                <CommentOutlined style={{fontSize: 25}}/>
            </Row>
            <Row className="hoverable-button-text">
                <div style={{fontSize: 13}}>
                    {numComments === 0 ? <div>コメント</div> : numComments}
                </div>
            </Row>
        </div>
    </Popover>
}

export default CommentButton