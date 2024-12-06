import {Flex} from "antd";
import AppHeader from "@/components/Header/AppHeader/app_header";
import {useEffect, useState} from "react";
import {getTransactionList} from "@/apis/transaction";
import BackIcon from "@/components/Button/BackIcon/back_icon";

function TransactionList() {
    document.title = "ジモト ｰ 取引一覧"
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        getTransactionList(
            (data) => setItemList(data),
        )
    }, [])
    return <Flex vertical={true}>
        <AppHeader onlyShowLogo={false}></AppHeader>
        <BackIcon/>
        <Flex justify="center" align="top">
            <div className="text-title-h1">取引一覧</div>
            {itemList.map((item, i) => {
                return (<></>)
            })}
        </Flex>
    </Flex>
}

export default TransactionList;