import {Card, Image} from 'antd';
import Meta from "antd/es/card/Meta";
import no_image from "@/assets/images/no_image.png"
import { useNavigate } from 'react-router-dom';
import PriceDisplay from "@/components/Price/PriceDisplay/price_display";
import "./item.css"
import sold from "@/assets/icons/sold.png"

function Item({title, image, price, id, status}) {
    const navigate = useNavigate();
    return <><Card
        className="item-card"
        hoverable
        onClick={() => navigate(`/item_detail/${id}`)}
        cover={<><Image
            className="item-card-cover"
            src={image}
            fallback={no_image}
            preview={false}
            style={{width:'100%',height:150,objectFit: 'contain',objectPosition: 'center' }}
        />
        </>}
    >
        <Meta title={title==="" ? "no description" : title} />
        <PriceDisplay price={price} style={{
            fontSize: 20,
            fontWeight: 'bold'
        }}/>
        {status===1&&<img className="home-item-sold-overlay" src={sold}></img>}
    </Card></>
}

export default Item;