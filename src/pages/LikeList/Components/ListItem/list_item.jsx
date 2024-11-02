import {Flex, Image} from "antd";
import no_image from "@/assets/images/no_image.png";
import {DeleteFilled} from "@ant-design/icons";
import PriceDisplay from "@/components/Price/PriceDisplay/price_display";
import {useNavigate} from "react-router-dom";
import "./list_item.css"

function ListItem({item, isEdit, onDeleteClick}) {
    const navigate = useNavigate();
    const onItemClick = ()=>{navigate(`/item_detail/${item.id}`)}
    return <Flex vertical={true} style={isEdit?{}:{cursor: "pointer"}} onClick={isEdit?()=>{}:onItemClick}>
        <Flex vertical={false}>
            <div className="like-list-img-div">
                <Image className="like-list-img" src={item.cover} fallback={no_image} preview={false}/>
            </div>
            <Flex vertical={true} style={{width:"80%",marginLeft:20}}>
                <div className="like-list-title">
                    {item.title}
                </div>
                <PriceDisplay price={item.price} style={{
                    fontSize: 20,
                    height: "50%",
                    alignItems: "center",
                    display: "flex",
                }}/>
            </Flex>
            <DeleteFilled style={isEdit?{cursor: "pointer"}:{display:"none"}} onClick={()=>onDeleteClick(item.id)}/>
        </Flex>
    </Flex>
}

export default ListItem;