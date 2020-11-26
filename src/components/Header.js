import {Layout, Menu, Image} from "antd";
import {AppstoreOutlined, TableOutlined} from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";  
import './Header.css'
export default (props) => {
    const {Header} = Layout;
    return (
        <Header style={{ zIndex: 1, width: '100%', backgroundColor: "white", height: "auto" }}>
                <Image src={"https://www.b2b-mrsk.ru/images/gates/rus/mrsk.png"} width={160} style=
                    {{
                        margin: 16,
                        float: "left"
                    }}/>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style=
                    {{
                        margin: 16,
                        float: "left"
                    }}>
                    <Menu.Item key="1" className="modified-item">Проблемы</Menu.Item>
                    <Menu.Item key="2" className="modified-item">Отчеты</Menu.Item>
                    <Menu.Item key="3" className="modified-item">Проекты</Menu.Item>
                </Menu>
        </Header>
    )
}


