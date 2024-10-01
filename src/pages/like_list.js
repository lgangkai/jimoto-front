import ItemDetail from "./item_detail";
import HeaderWithSearch from "../components/header";
import {Divider, Flex, Row} from "antd";
import ListItem from "../components/list_item";
import {CheckOutlined, EditOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import axios from "axios";

function LikeList() {
    document.title = "ジモト ｰ いいねリスト"
    const [itemList, setItemList] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8080/api/commodities/liked').then((data) => {
            var jsonObj = JSON.parse(data.data.data)
            setItemList(jsonObj)
            // console.log(jsonObj[0].title)
        }).catch((err)=>console.log(err));
    }, []);
    return <Flex vertical={true}>
        <HeaderWithSearch onlyShowLogo={false}></HeaderWithSearch>
        <Flex justify="center" align="top">
            <Flex vertical={true}
                style={{
                    width: 700,
                    wordWrap: "break-word",
                    marginLeft: 50
                }}>
                <Flex vertical={false}>
                    <div style={{
                        width: "92%",
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginTop: 20
                    }}>いいねリスト</div>
                    {isEdit? <CheckOutlined style={{
                        marginTop: 40,
                        fontSize: 20,
                    }} onClick={()=>setIsEdit(false)}/>:<EditOutlined style={{
                        marginTop: 40,
                        fontSize:20
                    }} onClick={()=>setIsEdit(true)}/>}
                </Flex>
                {itemList.map((item, i)=>{
                    return <div>
                        <Divider/>
                        <ListItem item={item} isEdit={isEdit}/>
                    </div>
                })}
                <Divider/>
            </Flex>
            </Flex>
    </Flex>
}

export default LikeList;