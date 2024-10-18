import AppHeader from "../components/Header/AppHeader/app_header";
import React, {useState} from "react";
import {Button, Col, Form, Input, message, Row} from "antd";
import {LeftOutlined, WarningOutlined} from '@ant-design/icons';
import axios from "axios";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import BackIcon from "../components/back_icon";

function Register() {
    document.title = "ジモト ｰ 新規登録"
    // const [messageApi, contextHolder] = message.useMessage();
    // const registerFailMsg = (err) => {
    //     messageApi.error(err.message)
    // }
    const [form] = Form.useForm();
    const [respMsg, setRespMsg] = useState("");
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.postForm(`http://localhost:8080/api/account/register`, values).then((resp) => {
            // var jsonObj = JSON.parse(data.data.data)
            console.log(resp)
            navigate('/register-success')
        }).catch((err) => {
            // registerFailMsg(err)
            if (err.response?.data?.code !== null) {
                if (err.response?.data?.code === 200001) {
                    setRespMsg("メールアドレスはすでに登録しました！")
                } else {
                    setRespMsg("ネットワーク通信エラー、少々待ちください")
                }
            }　else {
                setRespMsg("ネットワーク通信エラー、少々待ちください")
            }
        });
    };
    const navigate = useNavigate();
    return <div>
        {/*{contextHolder}*/}
        <AppHeader onlyShowLogo={true}/>
        <BackIcon/>
        <Row justify="center" align="top">
            <Col>
                <div style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    marginTop: 20,
                    marginBottom: 30,
                }}>
                    会員登録
                </div>

                <Form
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    style={{
                        width: 400,
                    }}
                >
                    <div style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}>メールアドレス</div>
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
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="例）lgangkai@gmail.com" />
                    </Form.Item>
                    <div style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}>パスワード</div>
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
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="8-13文字で入力してください"
                        />
                    </Form.Item>
                    <div style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}>パスワード確認</div>
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
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('パスワードが再入力したパスワードは一致しません!'));
                                },
                            }),
                        ]}
                        style={{
                            marginBottom: 40,
                        }}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="もう一度パスワードを入力してください"
                        />
                    </Form.Item>
                    <div style={respMsg===""?{marginBottom:10,color:"red",fontSize:15,display:"none"}:{marginBottom:10,color:"red",fontSize: 15}}>
                        <WarningOutlined /> {respMsg}
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{
                            width: "100%"
                        }}>
                            会員登録
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </div>
}

export default Register;