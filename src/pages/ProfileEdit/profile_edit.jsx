import {Button, Flex, Form, Input, message} from "antd";
import AppHeader from "../../components/Header/AppHeader/app_header";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../../api/api";
import "./profile_edit.css"
import AvatarUploader from "../../components/Avatar/AvatarUploader/avatar_uploader";
import "../../style/base.css"

function ProfileEdit() {
    document.title = "プロフィール編集"
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [profile, setProfile] = useState({})
    const [form] = Form.useForm();
    // call without useEffect leads to dead loop
    useEffect(() => {
        API.getProfile().then((res)=>{
            setProfile(res)
            console.log(res)
        })
    }, []);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        API.updateProfile(values).then((resp) => {
            console.log(resp)
            messageApi.success("更新完了", 1, ()=>navigate(-1))
        }).catch((err) => {
            if (err.response?.status === 401) {
                messageApi.error("まだ未登録です", 1, ()=>navigate(-1))
            }　else {
                messageApi.error("ネットワーク通信エラー、少々待ちください")
            }
        })
    };
    const onAvatarUploaded = ({filename}) => {
        console.log(filename)
        form.setFieldsValue({avatar_url:filename})
    }

    return <Flex vertical={true}>
        {contextHolder}
        <AppHeader onlyShowLogo={false}></AppHeader>
        <Form
            className="layout-form-center-container"
            onFinish={onFinish}
            form={form}
        >
            <div className="text-title-h1">プロフィール編集</div>
            <Flex className="profile-edit-content" vertical={true}>
                <div className="text-title-h2">画像</div>
                <AvatarUploader avatar={profile.avatar} onUploadDone={onAvatarUploaded}/>
                <Form.Item name={"avatar_url"}/>
                <div className="text-title-h2">ユーザネーム</div>
                <Form.Item name={"username"}>
                    <Input showCount maxLength={20} placeholder={profile.username}/>
                </Form.Item>
                <div className="text-title-h2">自己紹介</div>
                <Form.Item name={"introduction"}>
                    <Input.TextArea rows={5} showCount maxLength={1000}/>
                </Form.Item>
                <Form.Item>
                    <Button
                        className="profile-edit-btn"
                        type="primary"
                        danger
                        htmlType="submit"
                    >
                        更新する
                    </Button>
                </Form.Item>
            </Flex>
        </Form>
    </Flex>
}

export default ProfileEdit;