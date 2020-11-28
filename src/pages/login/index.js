import React from "react";
import { Form, Input, Button, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setUserSession } from "../../utils/sessionUtils";

export default class LoginPage extends React.Component {
    handleSubmit = () => {
        const user = { "name": "user" };
        setUserSession(user);
        this.props.history.push('/initiatives')
    };

    render() {
        return (
            <div className="login-container" style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", justifySelf: "center" }}>
                <div className="login-container" style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "row", justifyContent: "center", justifyItems: "center", justifySelf: "center" }}>
                    <div style={{ height: "10vh", width: "17vw", marginTop: "17vh", display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", justifySelf: "center" }}>
                        <Image src={"/LogoRoss.png"} width={472 * 0.5} height={170 * 0.5} style=
                            {{
                                margin: 10,
                                float: "right",
                            }} />
                        <Input
                            style={{ marginTop: "15px" }} placeholder="Логин" size={'large'}
                        />
                        <Input
                            style={{ marginTop: "15px" }} placeholder="Пароль" size={'large'}
                        />
                        <Button style={{ marginTop: "15px" }} type="primary" htmlType="submit" className="login-form-button" onClick={() => {
                            const user = { "name": "user" };
                            setUserSession(user);
                            this.props.history.push('/main')
                        }}>
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}