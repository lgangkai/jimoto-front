import React, {useState} from 'react';
import {LockOutlined, UserOutlined, WarningOutlined} from '@ant-design/icons';
import {Button, Col, Form, Input, Row} from 'antd';
import HeaderWithSearch from "../components/header";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import BackIcon from "../components/back_icon";
import {setUserId} from "../store/modules/user";
import store from "../store";
const Login = () => {
    document.title = "ジモト ｰ ログイン"
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        axios.postForm(`http://localhost:8080/api/account/login`, values).then((resp) => {
            var jsonObj = JSON.parse(resp.data?.data)
            // console.log(jsonObj?.user_id)
            var uId = jsonObj?.user_id
            if (uId === null) {
                uId = -1
            }
            setRespMsg("")
            // store.dispatch(setUserId(uId))
            // console.log(store.getState().user.userId)
            navigate(-1)
        }).catch((err) => {
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
        }).finally(() => setLoading(false));
    };
    const onFinishFailed = () => setLoading(false)
    const [form] = Form.useForm();
    form.setFieldsValue({
        url: 'https://taobao.com/',
    });
    const [respMsg, setRespMsg] = useState("");
    const [loading, setLoading] = useState(false)
    return (
        <div>
            <HeaderWithSearch onlyShowLogo={true}/>
            <BackIcon/>
            <Row justify="center" align="top">
                <Col>
                    <div style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: 20,
                        marginBottom: 30,
                    }}>
                        ログイン
                    </div>

                    <Form
                        form={form}
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        style={{
                            width: 400,
                        }}
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
                        <div style={respMsg===""?{marginBottom:10,color:"red",fontSize:15,display:"none"}:{marginBottom:10,color:"red",fontSize: 15}}>
                            <WarningOutlined /> {respMsg}
                        </div>
                        {/*<Form.Item>*/}
                        {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
                        {/*        <Checkbox>Remember me</Checkbox>*/}
                        {/*    </Form.Item>*/}

                        {/*    <a className="login-form-forgot" href="">*/}
                        {/*        Forgot password*/}
                        {/*    </a>*/}
                        {/*</Form.Item>*/}

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading} onClick={()=>setLoading(true)} style={{
                                marginRight: 20,
                                width: 255
                            }}>
                                ログイン
                            </Button>
                            または <a onClick={() => navigate("/register")}>新規会員登録</a>
                        </Form.Item>
                        <a onClick={() => navigate("/register")}>パスワードを忘れました？</a>
                    </Form>
                </Col>
            </Row>
        </div>

    );
};
export default Login;