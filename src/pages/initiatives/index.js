import React, {useState} from 'react'
import {Button, Layout, PageHeader, Spin, Row, Col} from 'antd';
import Header from "../../components/Header";

export default function Initiatives() {
    const [isLoading, setLoading] = useState(true);
    const {Content} = Layout;
    return (
        <Layout className="wrapper">
            <Header selected={"stocktaking"}/>
            <Layout className={"figures"} style={{ zIndex: 1, width: '100%', backgroundColor: "#F3FAFF", height: 140, flex: "none", flexDirection: 'row', alignItems: 'center'  }}>
                <div style={{paddingLeft : "10%", marginBottom: 10}}>
                    <div style={{fontWeight: 600, fontFamily: "Raleway", fontSize: 24}}>Инициативы</div>
                    <div style={{fontWeight: 300, fontFamily: "Raleway", fontSize: 16}}>Здесь список всех рационализаторских инициатив</div>
                </div>
            </Layout>
            <Layout>
                <Layout style={{marginLeft: 25, marginRight: 25, marginTop: 25}}>
                    <PageHeader
                        ghost={false}
                        title="Рационализаторские инициативы"
                        extra={[
                                <Button key="1" type="primary">
                                    Добавить инициативу
                                </Button>
                        ]}
                    />

                    <Content className="site-layout-background" style={{
                        padding: '0 24px',
                        overflow: 'auto'
                    }}>
                        {isLoading ?
                            <div style={{textAlign: "center", paddingTop: 200}}><Spin size="large"/></div>
                            :
                            <></>
                        }
                    </Content>
                </Layout>
            </Layout>
            <Layout.Footer style={{textAlign: 'center'}}>FlexBoys</Layout.Footer>
        </Layout>
    )
}