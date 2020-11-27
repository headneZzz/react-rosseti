import React, {useState} from 'react'
import {Button, Layout, PageHeader, Spin, Row, Col, Table, Tag, Space, Input} from 'antd';
import Header from "../../components/Header";
import CreateDocument from "../CreateDocument";
import Title from "../../components/Title"
import Form from "../../components/Form"
import MainPage from "../Main"
import ProfilePage from "../Profile"
export default function Initiatives() {
    const [isLoading, setLoading] = useState(true);
    const {Content} = Layout;
    return (
        <Layout className="wrapper" style={{backgroundColor: 'white'}}>
            <Header selected={"stocktaking"}/>
                <CreateDocument />
        </Layout>
    )
}