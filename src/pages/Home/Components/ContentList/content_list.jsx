import React from 'react';
import { useEffect, useState } from "react";
import {Pagination, Row} from 'antd';
import Item from "./item";
import {getCommodities} from "@/apis/commodity";
import {useDispatch, useSelector} from "react-redux";
import {ContentsFilterMap, ContentsOrderMap, DefaultPageSize, setPage} from "@/store/modules/contents_filter";
import Loadable, {LoadState} from "@/components/Loadable/loadable";
import "./content_list.css"

function ContentList() {
    const dispatch = useDispatch();
    const {selectedFilter, selectedOrder, page} = useSelector((state) => state.contents_filter);
    const [state, setState] = useState(LoadState.Loading);
    const [post, setPost] = useState([]);
    const [count, setCount] = useState(1);
    const onPageChange = (page, pageSize) => {
        dispatch(setPage({
            page: page,
            pageSize: pageSize
        }))
    }
    useEffect(() => {
        getCommodities({
            filter_type: ContentsFilterMap[selectedFilter].urlParam,
            order_type: ContentsOrderMap[selectedOrder].urlParam,
            page: page.page,
            page_size: page.pageSize,
        },(data)=> {
            setPost(data.commodities)
            setCount(data.count)
            if (data.commodities.length === 0) {
                setState(LoadState.LoadNothing)
            } else {
                setState(LoadState.LoadSuccess)
            }
        }, () => {
            setState(LoadState.LoadFailure)
        })
    }, [selectedFilter, selectedOrder, page])

    return <>
        <Loadable state={state}>
            <Row justify="center" align="top">
                {post.map((item, i) => {
                    return (
                        <Item title={item.title} image={item.cover} price={item.price} key={i} id={item.id} status={item.status}></Item>
                    );
                })}
            </Row>
        </Loadable>
        <Pagination
            className="content-list-pagination"
            pageSize={DefaultPageSize}
            defaultCurrent={1}
            total={count}
            onChange={onPageChange}
        />
    </>
}

export default ContentList;

