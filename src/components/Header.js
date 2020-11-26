import {Layout, Menu, Image} from "antd";
import {AppstoreOutlined, TableOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";  
import './Header.css'
export default (props) => {
    const {Header} = Layout;
    return (
        <Header style={{ zIndex: 1, width: '100%', backgroundColor: "white", height: "auto" }}>
                <Image src={"https://www.b2b-mrsk.ru/images/gates/rus/mrsk.png"} width={160} height={50} style=
                    {{
                        margin: 15,
                        float: "left"
                    }}/>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}  height={50} style=
                    {{
                        margin: 15,
                        float: "left"
                    }}>
                    <Menu.Item key="1" className="modified-item">Проблемы</Menu.Item>
                    <Menu.Item key="2" className="modified-item">Отчеты</Menu.Item>
                    <Menu.Item key="3" className="modified-item">Проекты</Menu.Item>
                </Menu>
                <Profile name={"Дора Дура"} photo={"https://images.genius.com/3a3d16332164a48f9e46f160cb8cd6fa.300x300x1.jpg"}/>
        </Header>
    )
}


function Profile(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'col', justifyContent:'center', float: 'right'}}>
            <div className={"profile-container"} style={{display: "flex", float: "right", flexDirection: 'row', marginTop: 15}}>
                    <Image src={props.photo} width={45} height={45} style=
                        {{
                            float: "right"
                        }}/>
                    <div>
                        <span style={{fontSize: 16, fontFamily: "Raleway", marginRight: 10, marginLeft: 10 }}>
                            {props.name}
                        </span>
                    </div>
                    <div>
                        <DownOutlined />
                    </div>
                </div>
        </div>
    );
}


