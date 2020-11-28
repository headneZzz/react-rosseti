import {Layout, Menu, Image, Dropdown} from "antd";
import {AppstoreOutlined, TableOutlined, DownOutlined, CheckOutlined } from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";  
import './Header.css'
export default (props) => {
    const {Header} = Layout;
    return (
        <Header style={{ zIndex: 1, width: '100%', backgroundColor: "white", height: "auto", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link to="/main" style={{alignSelf: 'center'}}>
                <img src={"https://www.b2b-mrsk.ru/images/gates/rus/mrsk.png"} width={160} height={50} style=
                    {{
                        alignSelf: 'center',
                        justifySelf: 'center',
                        margin: 15,
                        float: "left"
                    }}/>
                </Link>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}  height={50} style=
                    {{
                        margin: 15,
                        float: "left"
                    }}>
                    <Menu.Item key="2" className="modified-item">Инициативы</Menu.Item>
                    <Menu.Item key="1" className="modified-item">Отчеты</Menu.Item>
                    <Menu.Item key="3" className="modified-item">Статистика</Menu.Item>
                </Menu>
                </div>
                <div style={{width:'20%'}}>
                    <Profile name={"Дарья Золоторева"} photo={"https://www.modnapricha.info/wp-content/uploads/2019/12/top-strizhek-dlya-kvadratnoj-formy-lica3.jpg"}/>
                </div>
                
        </Header>
    )
}


function Profile(props) {
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <Link to="/profile">
              Профиль
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              Выйти
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
        <div>
            <Dropdown overlay={menu}>
            <div className={"profile-container"} style={{display: "flex", float: "right", flexDirection: 'row', marginTop: 15}}>
            
                    <img src={props.photo} width={45} height={45} style=
                        {{
                            borderRadius: 100,
                            float: "right",
                            alignSelf: 'center'
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
                </Dropdown>
        </div>
    );
}


