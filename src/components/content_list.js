import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import {Breadcrumb, Layout, Flex, theme, Row} from 'antd';
import Item from "./item";
import { css } from '@emotion/react';
const { Header, Content, Footer } = Layout;

function ContentList() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/commodities/latest").then((data) => {
            console.log(data);
            var jsonObj = JSON.parse(data?.data?.data)
            setPost(jsonObj);
            console.log(jsonObj);
        }).catch((err)=>console.log(err));
    }, []);

    return <Row justify="center" align="top">
        {post.map((item, i) => {
            return (
                <Item title={item.title} image={item.cover} price={item.price} key={i} id={item.id} creatorId={item.creator_id}></Item>
            );
        })}
    </Row>
}

export default ContentList;

