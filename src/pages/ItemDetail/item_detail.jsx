import {Flex, Button} from "antd";
import { useParams } from 'react-router-dom';
import AppHeader from "@/components/Header/AppHeader/app_header";
import PriceDisplay from "@/components/Price/PriceDisplay/price_display";
import {useEffect, useState} from "react";
import ImageGroup from "@/pages/ItemDetail/Components/ImageGroup/image_group";
import LikeButton from "@/pages/ItemDetail/Components/HoverableButton/like_button";
import CommentButton from "@/pages/ItemDetail/Components/HoverableButton/comment_button";
import SellerInfo from "@/pages/ItemDetail/Components/HoverableButton/seller_info";
import {getCommodity} from "@/apis/commodity";
import Loadable, {LoadState} from "@/components/Loadable/loadable";
import "./item_detail.css"
import "@/style/base.css"

function ItemDetail() {
    document.title = "ジモト ｰ 商品詳細"
    const itemId = useParams()["id"]
    const [images, setImages] = useState([]);
    const [comments, setComments] = useState([])
    const [item, setItem] = useState({});
    const [state, setState] = useState(LoadState.Loading);
    useEffect(() => {
        getCommodity(itemId,
            (data) => {
                setItem(data)
                setImages(data.images===undefined?['']:data.images);
                setState(LoadState.LoadSuccess)
            },
            () => setState(LoadState.LoadFailure)
        )
    }, []);
    return <Flex vertical={true}>
        <AppHeader onlyShowLogo={false}></AppHeader>
        <Flex justify={'center'} className="item-detail-content">
            <Loadable state={state}>
                <ImageGroup images={images}/>
                <Flex className="item-detail-description" vertical={true}>
                    <div className="text-title-h1">
                        {item.title}
                    </div>
                    <PriceDisplay price={item.price} style={{fontSize:25,marginTop:10}}/>
                    <Flex className="item-detail-btn-group">
                        <LikeButton itemId={itemId}/>
                        <CommentButton numComments={comments.length}/>
                    </Flex>
                    <div className="text-title-h3">
                        {item.detail}
                    </div>
                    <div className="text-title-h1 margin-top">
                        出品者
                    </div>
                    <Flex className="item-detail-seller-div">
                        <SellerInfo creator_id={item.creator_id}/>
                        <Button
                            className="item-detail-buy-btn"
                            type={"primary"}
                            danger
                            shape={"round"}
                        >
                            この商品がほしい
                        </Button>
                    </Flex>
                    <div className="text-title-h1 margin-top">
                        {`コメント (${comments.length})`}
                    </div>
                </Flex>
            </Loadable>
        </Flex>
    </Flex>
}

export default ItemDetail;