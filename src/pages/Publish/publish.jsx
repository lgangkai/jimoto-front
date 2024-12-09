import AppHeader from "@/components/Header/AppHeader/app_header";
import BackIcon from "@/components/Button/BackIcon/back_icon";
import React, {useState} from "react";
import ImageGroupUploader from "@/pages/Publish/Components/ImageGroupUploader/image_group_uploader";
import {Button, ConfigProvider, Flex, Form, Input, InputNumber, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useNavigate, useParams} from "react-router-dom";
import "@/style/base.css"
import "./publish.css"
import {useSelector} from "react-redux";
import {publishCommodity} from "@/apis/commodity";

function Publish() {
    document.title = "ジモト ｰ ポスト"
    const navigate = useNavigate();
    const publishType = useParams()["type"]
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const {latitude, longitude, displayAddress} = useSelector(state => state.location)
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        publishCommodity(
            values,
            () => messageApi.success("ポスト完了", 1, ()=>navigate(-1)),
            (err) => {
                console.log(err)
                if (err.response?.status === 401) {
                    messageApi.error("まだ未登録です", 1, ()=>navigate(-1))
                }　else {
                    messageApi.error("ネットワーク通信エラー、少々待ちください")
                }
            }
        )
    };
    const [fileList, setFileList] = useState([]);
    const handleImgListChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        console.log(newFileList)
        var imgs = newFileList.map((item, i)=>{
            return item.status === "done"?JSON.parse(item.response?.data).filename:""
        })
        form.setFieldsValue({images: imgs.join(",")})
    }
    form.setFieldsValue({latitude:latitude,longitude:longitude})
    form.setFieldsValue({type:publishType==="sell"?0:1})
    return <Flex vertical={true}>
        {contextHolder}
        <AppHeader onlyShowLogo={true}/>
        <BackIcon/>
        <div className="text-title-h1-center">{ publishType==="buy"?"コレ買いたい":"コレ売りたい" }</div>
        <Form className="layout-form-center-container" onFinish={onFinish} form={form}>
            <div className="text-title-h3">画像選択（最大8枚）</div>
            <div className="image-group-selector-div">
                <ImageGroupUploader fileList={fileList} handleChange={handleImgListChange}/>
            </div>
            <Form.Item className="form-item-not-display" name={"images"}　rules={[
                {
                    required: true,
                    message: "画像をアップロードください!"
                }
            ]}/>
            <div className="text-title-h2">タイトル</div>
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
                <div className="text-title-h2">詳細</div>
                <Form.Item name={"detail"} rules={[
                    {
                        required: true,
                        message: "詳細を入力してください!"
                    }
                ]}>
                    <TextArea
                        className="publish-text-area-description"
                        showCount
                        maxLength={100}
                        placeholder={publishType==="buy"?"どんな物買いたいですか？":"状態、材質など。なるべく詳しい説明してください"}
                    />
                </Form.Item>
                <div className="text-title-h2">希望価格</div>
                <Form.Item name={"price"} rules={[
                    {
                        required: true,
                        message: "希望価格を入力してください!"
                    }
                ]}>
                    <InputNumber className="publish-price-area" prefix="￥" placeholder={0}/>
                </Form.Item>
                <div className="text-title-h2">投稿位置</div>
                <div className="publish-display-address">{displayAddress}</div>
                <Form.Item className="form-item-not-display" name={"latitude"}/>
                <Form.Item className="form-item-not-display" name={"longitude"}/>
                <Form.Item className="form-item-not-display" name={"type"}/>
                <Form.Item>
                    <Button className="publish-btn" type="primary" htmlType="submit">投稿</Button>
                </Form.Item>
            </ConfigProvider>
        </Form>
    </Flex>
}

export default Publish