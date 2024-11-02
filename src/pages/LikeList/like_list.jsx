import AppHeader from "@/components/Header/AppHeader/app_header";
import {Divider, Flex} from "antd";
import ListItem from "@/pages/LikeList/Components/ListItem/list_item";
import {CheckOutlined, EditOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import "./like_list.css"
import "@/style/base.css"
import {getLikeList, unlike} from "@/apis/commodity";

function LikeList() {
    document.title = "ジモト ｰ いいねリスト"
    const [itemList, setItemList] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    useEffect(()=> {
        getLikeList((data) => {setItemList(data)})
    }, []);
    const onDeleteClick = (id)=>{
        unlike(id, () => setItemList(itemList.filter((item) => item.id !== id)))
    }
    return <Flex vertical={true}>
        <AppHeader onlyShowLogo={false}></AppHeader>
        <Flex justify="center" align="top">
            <Flex className="layout-content-center-vertical" vertical={true}>
                <Flex vertical={false}>
                    <div className="like-list-title-div">
                        <div className="text-title-h1">いいねリスト</div>
                    </div>
                    {isEdit? <CheckOutlined className="like-list-icon" onClick={()=>setIsEdit(false)}/>:
                        <EditOutlined className="like-list-icon" onClick={()=>setIsEdit(true)}/>}
                </Flex>
                {itemList.map((item, i)=>{
                    return <div>
                        <Divider/>
                        <ListItem item={item} isEdit={isEdit} onDeleteClick={onDeleteClick}/>
                    </div>
                })}
                <Divider/>
            </Flex>
        </Flex>
    </Flex>
}

export default LikeList;