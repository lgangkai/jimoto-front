import {Image} from "antd";
import "./item.css"
import no_image from "@/assets/images/no_image.png";
import sold from "@/assets/icons/sold.png";

function Item({item}) {
    const handleOnItemClick = () => {}
    return <div className="profile-sold-item-div" onClick={handleOnItemClick}>
        <Image
            className="item-image"
            src={item.cover}
            fallback={no_image}
            preview={false}
            style={{
                width: 150,
                height: 150,
                objectFit: 'contain',
                objectPosition: 'center'
            }}/>
        <div className="profile-sold-item-text">
            {item.title}
        </div>
        {item.status===1&&<img className="profile-sold-item-overlay" src={sold}></img>}
    </div>
}

export default Item