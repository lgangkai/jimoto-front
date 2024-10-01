import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {Col, Popover, Row} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";
import {getUserIdIfIsLogin} from "../utils/auth";
import {useNavigate} from "react-router-dom";

function LikeButton ({itemId}) {
    const [isHover, setIsHover] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [likedUsers, setLikedUsers] = useState([])
    const [userId, setUserId] = useState()
    getUserIdIfIsLogin().then((data)=>setUserId(data))
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8080/api/commodity/${itemId}/liked-users`).then((data)=>{
            // console.log(JSON.parse(data.data.data))
            const users = JSON.parse(data.data.data)
            const uIds = []
            users.map((item,i)=>(uIds.push(item.user_id)))
            setLikedUsers(uIds)
        }).catch((err)=>console.log(err))
    }, []);
    const handleLikeClick = () => {
        if (userId===-1) {
            navigate('/login')
        } else {
            const urlPath = isLiked ? "unlike" : "like"
            axios.post(`http://localhost:8080/api/commodity/${itemId}/action/`+urlPath).then((data)=>{
                if (!isLiked) {
                    likedUsers.push(userId)
                } else {
                    likedUsers.splice(likedUsers.indexOf(userId), 1)
                }
                const newLikedUsers = JSON.parse(JSON.stringify(likedUsers));
                setLikedUsers(newLikedUsers)
            }).catch((err)=>console.log(err))
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
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} onClick={handleLikeClick} style={isHover?{
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
                {isLiked?<HeartFilled style={{color:"red",fontSize:25}}/>:
                    <HeartOutlined style={{color:"black",fontSize:25}}/>}
            </Row>
            <Row style={{
                width:50,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                marginTop:5
            }}>
                <div style={{fontSize:13}}>
                    {likedUsers.length===0?<div>いいね！</div>:likedUsers.length}
                </div>
            </Row>
        </div>
    </Popover>
}

export default LikeButton