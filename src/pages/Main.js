import React, {useState} from 'react'
import {Layout} from 'antd';
import Title from "../components/Title"
import Form from "../components/Form"
import Header from '../components/Header'
export default (props) => {
    return (
        <div>
        <Title title={"Инициативы"} description={"Здесь список всех рационализаторских инициатив"}/>
            <div style={{backgroundColor: "white"}}>
                <div style={{marginLeft: 50, marginRight: 50, marginTop: 25, backgroundColor: 'white'}}>
                    <div className="site-layout-background" style={{
                        padding: '0 24px',
                        overflow: 'auto',
                        backgroundColor: 'white'
                    }}>
                        
                        {props.children}
                    </div>
                </div>
            </div>
            </div>
    )
}