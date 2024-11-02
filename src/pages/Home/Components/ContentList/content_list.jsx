import React from 'react';
import { useEffect, useState } from "react";
import {Row} from 'antd';
import Item from "./item";
import {getCommodities} from "@/apis/commodity";
import {useSelector} from "react-redux";
import {ContentsFilterMap, ContentsOrderMap} from "@/store/modules/contents_filter";
import Loadable, {LoadState} from "@/components/Loadable/loadable";

function ContentList() {
    const {selectedFilter, selectedOrder} = useSelector((state) => state.contents_filter);
    const [state, setState] = useState(LoadState.Loading);
    useEffect(() => {
        getCommodities({
            filter_type: ContentsFilterMap[selectedFilter].urlParam,
            order_type: ContentsOrderMap[selectedOrder].urlParam
        },(data)=> {
            setPost(data)
            setState(LoadState.LoadSuccess)
        }, () => {
            setState(LoadState.LoadFailure)
        })
    }, [selectedFilter, selectedOrder])

    const [post, setPost] = useState([]);

    return <Loadable state={state}>
        <Row justify="center" align="top">
            {post.map((item, i) => {
                return (
                    <Item title={item.title} image={item.cover} price={item.price} key={i} id={item.id}></Item>
                );
            })}
        </Row>
    </Loadable>
}

export default ContentList;

