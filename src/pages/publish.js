import HeaderWithSearch from "../components/header";
import BackIcon from "../components/back_icon";
import React, {useState} from "react";
import ImageGroupUploader from "../components/image_group_uploader";
import {Button, ConfigProvider, Flex, Form, Input, InputNumber, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Publish() {
    document.title = "ジモト ｰ 出品"
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.postForm(`http://localhost:8080/api/commodity`, values).then((resp) => {
            console.log(resp)
            messageApi.success("出品完了", 1, ()=>navigate(-1))
        }).catch((err) => {
            console.log(err)
            if (err.response?.status === 401) {
                messageApi.error("まだ未登録です", 1, ()=>navigate(-1))
            }　else {
                messageApi.error("ネットワーク通信エラー、少々待ちください")
            }
        });
    };
    const [fileList, setFileList] = useState([]);
    const handleImgListChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        console.log(newFileList)
        var imgs = newFileList.map((item, i)=>{
            return item.status === "done"?JSON.parse(item.response?.data).filename:""
            // if (item.status === "done") {
            //     return JSON.parse(item.response?.data).filename
            // } else
            //     return ""
        })
        form.setFieldsValue({images: imgs.join(",")})
    }
    return <Flex vertical={true} style={{
    }}>
        {contextHolder}
        <HeaderWithSearch onlyShowLogo={true}/>
        <BackIcon/>
        <div style={{
            fontWeight: "bold",
            fontSize: 28,
            display: "flex",
            justifyContent: "center",
        }}>商品の出品</div>
        <Form onFinish={onFinish} form={form} style={{
            width: 460,
            alignSelf: "center",
            marginTop: 20,
        }}>
            <div style={{fontSize:18}}>画像選択（最大8枚）</div>
            <div style={{
                height: 215,
                padding: 10,
                backgroundColor: "#ebebeb",
                border: "dashed",
                borderColor: "grey",
            }}>
                <ImageGroupUploader fileList={fileList} handleChange={handleImgListChange}/>
            </div>
            <Form.Item name={"images"}　rules={[
                {
                    required: true,
                    message: "画像をアップロードください!"
                }
            ]}/>
            <div style={{
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 30,
            }}>タイトル</div>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            inputFontSize: 16,
                        },
                        TextArea: {
                            inputFontSize: 16,
                        }
                    },
                }}
            >
                <Form.Item name={"title"} rules={[
                    {
                        required: true,
                        message: "タイトルを入力してください!"
                    }
                ]}>
                    <Input showCount maxLength={20}/>
                </Form.Item>
                <div style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginTop: 30,
                }}>詳細</div>
                <Form.Item name={"detail"}　rules={[
                    {
                        required: true,
                        message: "詳細を入力してください!"
                    }
                ]}>
                    <TextArea
                        showCount
                        maxLength={100}
                        placeholder="状態、材質など。なるべく詳しい説明してください"
                        style={{
                            height: 180,
                            resize: 'none',
                        }}
                    />
                </Form.Item>
                <div style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginTop: 30,
                }}>価格</div>
                <Form.Item name={"price"} rules={[
                    {
                        required: true,
                        message: "価格を入力してください!"
                    }
                ]}>
                    <InputNumber prefix="￥" placeholder={0} style={{
                        width: "100%",
                    }}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{
                        width: "100%",
                        height: 45,
                        fontSize: 22,
                        fontWeight: "bold",
                        marginTop: 20,
                    }}>出品</Button>
                </Form.Item>
            </ConfigProvider>
        </Form>
    </Flex>
}

export default Publish