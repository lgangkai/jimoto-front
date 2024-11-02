import AppHeader from "@/components/Header/AppHeader/app_header";
import React, {useState} from "react";
import {Button, Flex, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import BackIcon from "@/components/Button/BackIcon/back_icon";
import {register} from "@/apis/user"
import "./register.css"
import FormSubmitErrorMessage from "@/components/Message/FormSubmitErrorMessage/form_submit_error_message";

function Register() {
    document.title = "ジモト ｰ 新規登録"
    const [form] = Form.useForm();
    const [respMsg, setRespMsg] = useState("");
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        register(
            values,
            () => navigate('/register-success'),
            (err) => {
                if (err.response?.data?.code !== null) {
                    if (err.response?.data?.code === 200001) {
                        setRespMsg("メールアドレスはすでに登録しました！")
                    } else {
                        setRespMsg("ネットワーク通信エラー、少々待ちください")
                    }
                }　else {
                    setRespMsg("ネットワーク通信エラー、少々待ちください")
                }
            }
        )
    };
    const navigate = useNavigate();
    return <Flex vertical={true}>
        {/*{contextHolder}*/}
        <AppHeader onlyShowLogo={true}/>
        <BackIcon/>
            <div className="text-title-h1-center">
                会員登録
            </div>

        <Form
            className="layout-form-center-container"
            form={form}
            name="normal_login"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <div className="text-title-h2">メールアドレス</div>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'メールアドレスを入力してください!',
                    },
                    {
                        type: "email",
                        message: '正しいメールアドレスフォーメットを入力してください!',
                    },
                ]}
                style={{
                    marginBottom: 20,
                }}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="例）lgangkai@gmail.com"/>
            </Form.Item>
            <div className="text-title-h2">パスワード</div>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'パスワードを入力してください!',
                    },
                    {
                        max: 13,
                        min: 8,
                        message: 'パスワードは8-13文字を設定してください!',
                    },
                ]}
                style={{
                    marginBottom: 20,
                }}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="8-13文字で入力してください"
                />
            </Form.Item>
            <div className="text-title-h2">パスワード確認</div>
            <Form.Item
                name="password2"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: 'もう一度パスワードを入力してください!',
                    },
                    {
                        max: 13,
                        min: 8,
                        message: 'パスワードは8-13文字を設定してください!',
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('パスワードが再入力したパスワードは一致しません!'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="もう一度パスワードを入力してください"
                />
            </Form.Item>
            <FormSubmitErrorMessage message={respMsg}/>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="register-form-button" style={{
                    width: "100%"
                }}>
                    会員登録
                </Button>
            </Form.Item>
        </Form>
    </Flex>
}

export default Register;