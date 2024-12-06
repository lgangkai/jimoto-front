import {Flex, Button, Modal} from "antd";
import {useNavigate, useParams} from 'react-router-dom';
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
import classNames from "classnames";
import TransactionConfirm from "@/pages/Transaction/TransactionConfirm/transaction_confirm";

function ItemDetail() {
    document.title = "ジモト ｰ 商品詳細"
    const navigate = useNavigate();
    const itemId = useParams()["id"]
    const [images, setImages] = useState([]);
    const [comments, setComments] = useState([])
    const [item, setItem] = useState({});
    const [state, setState] = useState(LoadState.Loading);
    const [open, setOpen] = useState(false);
    const handleOnBuyClick = () => setOpen(true)
    const handleOnCancelClick = () => setOpen(false)
    const handleOnConfirmClick = () => {
        setOpen(false)
        // navigate()
    }
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
                            className={classNames({
                                "item-detail-buy-btn": true,
                                "sold": item.status===1
                            })}
                            type={"primary"}
                            danger
                            shape={"round"}
                            onClick={handleOnBuyClick}
                        >
                            {item.status===1?"売り切れました":"取引手続きへ"}
                        </Button>
                    </Flex>
                    <div className="text-title-h1 margin-top">
                        {`コメント (${comments.length})`}
                    </div>
                </Flex>
            </Loadable>
        </Flex>
        <Modal
            open={open}
            footer={null}
            closable={false}
        >
            <TransactionConfirm onCancelClick={handleOnCancelClick} onConfirmClick={handleOnConfirmClick}/>
        </Modal>
    </Flex>
}

export default ItemDetail;