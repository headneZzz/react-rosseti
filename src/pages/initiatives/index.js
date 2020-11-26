import React, {useState} from 'react'
import {Button, Layout, PageHeader, Spin, Row, Col, Table, Tag, Space, Input} from 'antd';
import Header from "../../components/Header";
import Title from "../../components/Titile"
import Form from "../../components/Form"

export default function Initiatives() {
    const [isLoading, setLoading] = useState(true);
    const {Content} = Layout;
    return (
        <Layout className="wrapper" style={{backgroundColor: 'white'}}>
            <Header selected={"stocktaking"}/>
            <Title title={"Инициативы"} description={"Здесь список всех рационализаторских инициатив"}/>
            <Layout style={{backgroundColor: "white"}}>
                <Layout style={{marginLeft: 50, marginRight: 50, marginTop: 25, backgroundColor: 'white'}}>
                    <Content className="site-layout-background" style={{
                        padding: '0 24px',
                        overflow: 'auto',
                        backgroundColor: 'white'
                    }}>
                        
                        <Form />
                    </Content>
                </Layout>
            </Layout>
            <Layout.Footer style={{textAlign: 'center'}}>FlexBoys</Layout.Footer>
        </Layout>
    )
}