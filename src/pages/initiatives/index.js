import React, {useState} from 'react'
import {Button, Layout, PageHeader, Spin, Row, Col, Table, Tag, Space, Input} from 'antd';
import Header from "../../components/Header";
import CreateDocument from "../CreateDocument";
import Title from "../../components/Title"
import Form from "../../components/Form"
import MainPage from "../Main"
import ProfilePage from "../Profile"
export default function Initiatives(props) {
    const [isLoading, setLoading] = useState(true);
    const {Content} = Layout;
    return (
        <Layout className="wrapper" style={{backgroundColor: 'white'}}>
            <Header selected={"stocktaking"}/>
                <Layout style={{backgroundColor: "white"}}>
                    <Layout style={{marginLeft: 50, marginRight: 50, marginTop: 25, backgroundColor: 'white'}}>
                        <Layout className="site-layout-background" style={{
                            padding: '0 24px',
                            overflow: 'auto',
                            backgroundColor: 'white'
                        }}>
                            
                            {props.children}
                        </Layout>
                    </Layout>
                </Layout>
        </Layout>
    )
}