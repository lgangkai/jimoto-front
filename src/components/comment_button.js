import {Popover, Row} from "antd";
import {CommentOutlined, HeartFilled, HeartOutlined} from "@ant-design/icons";
import {useState} from "react";

function CommentButton({numComments}) {
    const [isHover, setIsHover] = useState(false)
    return <Popover content={<div>コメント</div>}>
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} style={isHover?{
            marginTop: 20,
            marginLeft: 10,
            width:50,
            padding:5,
            cursor: "pointer",
            backgroundColor: "#ebebeb"
        }:{
            marginTop: 20,
            marginLeft: 10,
            width:50,
            padding:5,
            cursor: "pointer",
        }}>
            <Row style={{
                width:50,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <CommentOutlined style={{fontSize:25}}/>
            </Row>
            <Row style={{
                width:50,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                marginTop:5
            }}>
                <div style={{fontSize:13}}>
                    {numComments===0?<div>コメント</div>:numComments}
                </div>
            </Row>
        </div>
    </Popover>
}

export default CommentButton