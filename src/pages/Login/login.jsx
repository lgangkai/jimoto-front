import React, {useState} from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Flex, Form, Input, message} from 'antd';
import AppHeader from "@/components/Header/AppHeader/app_header";
import {useNavigate} from "react-router-dom";
import BackIcon from "@/components/Button/BackIcon/back_icon";
import {useDispatch} from "react-redux";
import {setAccessToken} from "@/store/modules/user";
import {login} from "@/apis/user";
import "./login.css"
import "@/style/base.css"
import FormSubmitErrorMessage from "@/components/Message/FormSubmitErrorMessage/form_submit_error_message";

const Login = () => {
    document.title = "ジモト ｰ ログイン"
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        login(
            values,
            async (resp) => {
                console.log(resp)
                setRespMsg("")
                await dispatch(setAccessToken(resp.access_token))
                message.success("ログイン完了！")
                navigate(-1)
            },
            (err) => {
                console.log(err)
                if (err.response?.data?.code !== null) {
                    if (err.response?.data?.code === 200004) {
                        setRespMsg("メールアドレスは登録していません！")
                    } else if (err.response?.data?.code === 200007) {
                        setRespMsg("メールアドレスまたはパスワードが違います！")
                    } else {
                        setRespMsg("ネットワーク通信エラー、少々待ちください")
                    }
                }　else {
                    setRespMsg("ネットワーク通信エラー、少々待ちください")
                }
            }
        ).finally(() => setLoading(false));
    };
    const onFinishFailed = () => setLoading(false)
    const [form] = Form.useForm();
    form.setFieldsValue({
        url: 'https://taobao.com/',
    });
    const [respMsg, setRespMsg] = useState("");
    const [loading, setLoading] = useState(false)
    return (
        <Flex vertical={true}>
            <AppHeader onlyShowLogo={true}/>
            <BackIcon/>
            <div className="text-title-h1-center">ログイン</div>
            <Form
                className="layout-form-center-container"
                form={form}
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'メールアドレスを入力してください!',
                        },
                    ]}
                    style={{
                        marginBottom: 40,
                    }}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="メールアドレス" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'パスワードを入力してください!',
                        },
                    ]}
                    style={{
                        marginBottom: 30,
                    }}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="パスワード"
                    />
                </Form.Item>
                <FormSubmitErrorMessage message={respMsg}/>

                <Form.Item>
                    <Button
                        className="login-form-button"
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        onClick={()=>setLoading(true)}
                    >
                        ログイン
                    </Button>
                    または <a onClick={() => navigate("/register")}>新規会員登録</a>
                </Form.Item>
                <a onClick={() => navigate("/register")}>パスワードを忘れました？</a>
            </Form>
        </Flex>

    );
};
export default Login;