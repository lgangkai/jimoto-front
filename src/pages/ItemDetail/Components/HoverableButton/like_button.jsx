import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {Popover, Row} from "antd";
import {useEffect, useState} from "react";
import {getUserIdIfIsLogin} from "@/utils/auth";
import {useNavigate} from "react-router-dom";
import "./hoverable_button.css"
import classNames from "classnames";
import {getLikedUsers, like, unlike} from "@/apis/commodity";

function LikeButton ({itemId}) {
    const [isHover, setIsHover] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [likedUsers, setLikedUsers] = useState([])
    const [userId, setUserId] = useState()
    const navigate = useNavigate();
    useEffect(() => {
        getUserIdIfIsLogin().then((data)=>setUserId(data))
        getLikedUsers(itemId, (data) => {
            const uIds = []
            data.map((item,i)=>(uIds.push(item.user_id)))
            setLikedUsers(uIds)
        })
    }, []);
    const handleLikeClick = () => {
        if (userId===-1) {
            navigate('/login')
        } else {
            if (isLiked) {
                unlike(itemId, ()=>{
                    likedUsers.splice(likedUsers.indexOf(userId), 1)
                    setLikedUsers(JSON.parse(JSON.stringify(likedUsers)))
                })
            } else {
                like(itemId, ()=>{
                    likedUsers.push(userId)
                    setLikedUsers(JSON.parse(JSON.stringify(likedUsers)))
                })
            }
        }
    }
    useEffect(() => {
        if (userId===-1 || !likedUsers.includes(userId)) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }, [likedUsers])
    return <Popover content={<div>いいね！</div>}>
        <div className={classNames({
                "hoverable-button": true,
                "hovering": isHover
            })}
            onMouseEnter={()=>setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
            onClick={handleLikeClick}
        >
            <Row className="hoverable-button-icon">
                {isLiked?<HeartFilled style={{color:"red",fontSize:25}}/>:
                    <HeartOutlined style={{color:"black",fontSize:25}}/>}
            </Row>
            <Row className="hoverable-button-text">
                <div style={{fontSize:13}}>
                    {likedUsers.length===0?<div>いいね！</div>:likedUsers.length}
                </div>
            </Row>
        </div>
    </Popover>
}

export default LikeButton