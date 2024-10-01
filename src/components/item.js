import {Avatar, Card, Image} from 'antd';
import MyFooter from "./footer";
import Meta from "antd/es/card/Meta";
import no_image from "../assets/images/no_image.png"
import {UserOutlined} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import PriceDisplay from "./price_display";

function Item({title, image, price, id, creatorId}) {
    const navigate = useNavigate();
    return <Card
        hoverable
        style={{
            width: 220,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5
        }}
        onClick={() => navigate(`/item_detail/${id}`)}//, { state: { creator_id: creatorId}})}
        // cover={<img alt="example" src={image==="" ? no_image : image} />}
        cover={<Image alt="example" src={image} fallback={no_image} preview={false}/>}
    >
        <Meta title={title==="" ? "no description" : title} />
        <PriceDisplay price={price} style={{
            fontSize: 20,
            fontWeight: 'bold'
        }}/>
    </Card>
}

export default Item;