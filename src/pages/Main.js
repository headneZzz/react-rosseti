import React, {useState} from 'react'
import {Layout} from 'antd';
import Title from "../components/Title"
import Form from "../components/Form"
export default (props) => {
    return (
        <div>
        <Title title={"Инициативы"} description={"Здесь список всех рационализаторских инициатив"}/>
            <Layout style={{backgroundColor: "white"}}>
                <Layout style={{marginLeft: 50, marginRight: 50, marginTop: 25, backgroundColor: 'white'}}>
                    <Layout className="site-layout-background" style={{
                        padding: '0 24px',
                        overflow: 'auto',
                        backgroundColor: 'white'
                    }}>
                        
                        <Form />
                    </Layout>
                </Layout>
            </Layout>
            </div>
    )
}