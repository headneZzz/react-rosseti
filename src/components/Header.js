import {Layout, Menu} from "antd";
import {AppstoreOutlined, TableOutlined} from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";

export default (props) => {
    const {Header} = Layout;
    return (
        <Header className="header">
            <Menu selectedKeys={props.selected} theme="dark" mode="horizontal">
                <Menu.Item key="initiatives" icon={<AppstoreOutlined/>}>
                    <Link to={"initiatives"}>
                        Проблемы
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}