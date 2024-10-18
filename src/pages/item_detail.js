import {Flex, Image, Row, Col, Radio, Avatar, Button} from "antd";
import { useParams, useLocation } from 'react-router-dom';
import Item from "../components/item";
import no_image from "../assets/images/no_image.png"
import AppHeader from "../components/Header/AppHeader/app_header";
import PriceDisplay from "../components/price_display";
import {useEffect, useState} from "react";
import ImageGroup from "../components/image_group";
import axios from "axios";
import LikeButton from "../components/like_button";
import CommentButton from "../components/comment_button";
import avatar_not_login from "../assets/images/avatar_not_login.png";
import {RightOutlined} from "@ant-design/icons";
import SellerInfo from "../components/seller_info";

function ItemDetail() {
    document.title = "ジモト ｰ 商品詳細"
    const location = useLocation().state
    // const creatorId = location.creator_id
    const itemId = useParams()["id"]
    const [images, setImages] = useState([]);
    const [comments, setComments] = useState([])
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/api/commodity/${itemId}/images`).then((data) => {
    //         var jsonObj = JSON.parse(data.data.data)
    //         const imgs = []
    //         jsonObj.map((img, i) => (
    //             imgs.push(img.image)
    //         ))
    //         // console.log(imgs)
    //         setImages(imgs);
    //     }).catch((err)=>console.log(err));
    // }, []);
    const [item, setItem] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/api/commodity/${itemId}`).then((data) => {
            var jsonObj = JSON.parse(data.data.data)
            // console.log(jsonObj.images)
            setItem(jsonObj);
            setImages(jsonObj.images===undefined?['']:jsonObj.images);
        }).catch((err)=>console.log(err));
    }, []);
    return <div style={{paddingBottom:100}}>
        <AppHeader onlyShowLogo={false}></AppHeader>
        <Row justify="center" align="top">
            <Col>
                <ImageGroup images={images}/>
            </Col>
            <Flex
                vertical={true}
                style={{
                    width: 400,
                    wordWrap: "break-word",
                    marginLeft: 50
            }}>
                <div
                    style={{
                        fontSize: 23,
                        fontWeight: 'bold',
                    }}>
                    {item.title}
                </div>
                <PriceDisplay price={item.price} style={{
                    fontSize: 25,
                    marginTop: 10
                }}/>
                <Flex>
                    <LikeButton itemId={itemId}/>
                    <CommentButton numComments={comments.length}/>
                </Flex>
                <div
                    style={{
                        fontSize: 18,
                        marginTop: 20,
                    }}>
                    {item.detail}
                </div>
                <div
                    style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginTop: 20
                    }}>
                    出品者
                </div>
                <Flex style={{
                    display: "flex",
                    alignItems: "center",
                    height: 70,
                    marginTop: 10,
                    marginBottom: 10,
                }}>
                    <SellerInfo/>
                    <Button type={"primary"} danger shape={"round"} style={{
                        width: "50%",
                        height: 40,
                        fontSize: 16,
                        fontWeight:"bold",
                        marginLeft: 10,
                    }}>この商品がほしい</Button>
                </Flex>
                <div
                    style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginTop: 20
                    }}>
                    {`コメント (${comments.length})`}
                </div>

            </Flex>

        </Row>

    </div>
}

export default ItemDetail;