import Item from "./item";
import {Divider, Flex, Image} from "antd";
import no_image from "../assets/images/no_image.png";
import {DeleteFilled} from "@ant-design/icons";
import {useState} from "react";
import PriceDisplay from "./price_display";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ListItem({item, isEdit}) {
    const navigate = useNavigate();
    const onItemClick = ()=>{navigate(`/item_detail/${item.id}`)}
    const onDeleteClick = ()=>{
        axios.post(`http://localhost:8080/api/commodity/${item.id}/action/unlike`).then((data)=>{}).catch((err)=>console.log(err))
    }
    return <Flex vertical={true} style={isEdit?{}:{cursor: "pointer"}} onClick={isEdit?()=>{}:onItemClick}>
        <Flex vertical={false}>
            <div style={{
                width: 80,
                height: 80,
                backgroundColor: "#ebebeb",
                alignItems: "center",
                justifyContent: "center",
                display: "flex"
            }}>
                <Image
                    src={item.cover}
                    fallback={no_image}
                    preview={false}
                    style={{
                        maxWidth: 80,
                        maxHeight: 80
                    }}
                />
            </div>
            <Flex vertical={true} style={{
                width: "80%",
                marginLeft: 20,
            }}>
                <div style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    height: "50%",
                    alignItems: "center",
                    display: "flex",
                }}>{item.title}</div>
                <PriceDisplay price={item.price} style={{
                    fontSize: 20,
                    height: "50%",
                    alignItems: "center",
                    display: "flex",
                }}/>
            </Flex>
            <DeleteFilled style={isEdit?{cursor: "pointer"}:{display:"none"}} onClick={onDeleteClick}/>
        </Flex>
    </Flex>
}

export default ListItem;