import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import {Breadcrumb, Layout, Flex, theme, Row} from 'antd';
import Item from "./item";
import API from "../api/api"
import { css } from '@emotion/react';
const { Header, Content, Footer } = Layout;

function ContentList() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        API.getLatestCommodities().then((res) => {setPost(res);})
    }, [])

    const [post, setPost] = useState([]);

    return <Row justify="center" align="top">
        {post.map((item, i) => {
            return (
                <Item title={item.title} image={item.cover} price={item.price} key={i} id={item.id} creatorId={item.creator_id}></Item>
            );
        })}
    </Row>
}

export default ContentList;

