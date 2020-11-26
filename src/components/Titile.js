import {Layout, Menu, Image} from "antd";
import {AppstoreOutlined, TableOutlined} from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";  
import './Header.css'
export default (props) => {
    return (
        <Layout className={"figures"} style={{ zIndex: 1, width: '100%', backgroundColor: "#F3FAFF", height: 140, flex: "none", flexDirection: 'row', alignItems: 'center'  }}>
        <div style={{paddingLeft : "10%", marginBottom: 10}}>
    <div style={{fontWeight: 600, fontFamily: "Raleway", fontSize: 24}}>{props.title}</div>
    <div style={{fontWeight: 300, fontFamily: "Raleway", fontSize: 16}}>{props.description}</div>
        </div>
    </Layout>
    )
}