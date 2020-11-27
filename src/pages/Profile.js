import React, {useState} from 'react'
import {Layout, Row, Col, Image, Button, Input} from 'antd';
import {AppstoreOutlined, TableOutlined, DownOutlined, CheckOutlined, CloseOutlined  } from "@ant-design/icons";
import Title from "../components/Title"
import Form from "../components/Form"
export default (props) => {

    const data = {name: "Дора Дура", email: "sosi@pisos.ru", password: 'secret'}
    
    const fetchData = () => {
        return data;
    }

    const changeData = (newData) =>{
        data = newData;
    }

    const[profileData, setProfileData] = useState(fetchData())

    return (
        <div>
            <Layout style={{backgroundColor: "white"}}>
                <Layout style={{marginLeft: 50, marginRight: 50, marginTop: 25, backgroundColor: 'white'}}>
                    <Layout className="site-layout-background" style={{
                        padding: '0 24px',
                        overflow: 'auto',
                        backgroundColor: 'white'
                    }}>
                        
                        <Row>
                            <Col span={2} />
                            <Col span={7} style={{marginBottom: 40}}>
                                <ProfileSwitcher profileData={profileData} changeData={(newData)=>(setProfileData(newData))}/>
                            </Col>
                            <Col span={13}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <Row style={{fontFamily:'Raleway', fontSize: 20, marginBottom : 20, fontWeight: 600}}>
                                        Инициативы
                                    </Row>
                                    <Row style={{display: 'block'}}>
                                    <Row style={{paddingBottom: 20}}>
                                        <Col span={12} > <Card /> </Col>
                                        <Col span={12} ><Card /> </Col>
                                    </Row>
                                    <Row style={{paddingBottom: 20}}>
                                        <Col span={12} ><Card /> </Col>
                                        <Col span={12} ><Card /> </Col>
                                    </Row>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={2} />
                        </Row>
                    </Layout>
                </Layout>
            </Layout>
            </div>
    )
}

function ProfileSwitcher(props)
{
    const [editing, setEditing] = useState(0);
    if(editing == 0)
    {
        return <Profile onClick={()=>setEditing(1)}/>
    }else
    {
        return <EditProfile profileData={props.profileData} onClick={()=>setEditing(0)} changeData={(newData)=>{props.changeData(newData); setEditing(0)}}/>
    }
}

function Profile(props)
{
    return(
        <div className={"profile-container"} style={{flexDirection: 'row', justifyContent : 'center', display: 'flex', alignItems : 'center'}}>
                                    <div style={{flexDirection : 'column', display: 'flex', alignItems: 'center'}}>
                                    <Image src={"https://images.genius.com/3a3d16332164a48f9e46f160cb8cd6fa.300x300x1.jpg"} width={175} height={175} style=
                                    {{
                                        marginBottom: 15,
                                        borderRadius: 50
                                    }}/>
                                    <div style={{fontFamily: 'Raleway', fontSize: 24, fontWeight: 600, marginBottom: 10}}>
                                        Дора Дура
                                    </div>
                                        <Button size={'large'} onClick={()=>props.onClick()}>Изменить профиль</Button>
                                    </div>
                                </div>
    );
}

function EditProfile(props)
{
    return(
        <div className={"profile-container"} style={{flexDirection: 'row', justifyContent : 'center', display: 'flex', alignItems : 'center'}}>
                                    <div style={{flexDirection : 'column', display: 'flex', alignItems: 'center'}}>
                                    <img src={"https://images.genius.com/3a3d16332164a48f9e46f160cb8cd6fa.300x300x1.jpg"} width={175} height={175} style=
                                    {{
                                        marginBottom: 15,
                                        borderRadius: 100
                                    }}/>
                                    <div style={{marginBottom: 10}} >
                                        <Input placeholder={props.profileData.name} size={'large'}/>
                                    </div>
                                    <div style={{marginBottom: 10}}>
                                        <Input placeholder={props.profileData.email} size={'large'}/>
                                    </div>
                                    <div style={{marginBottom: 10}}>
                                        <Input placeholder="Новый пароль" size={'large'}/>
                                    </div>
                                    <div style={{marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                                        <Button type="primary" size={"large"} style={{width:'45%', borderRadius: 3}} onClick={()=>{props.changeData({name: "Дора Дура2", email: "sosi@pisos.ru", password: 'secret'})}}>
                                            <CheckOutlined />
                                        </Button>
                                        <Button type="primary" size={"large"} style={{width:'45%', borderRadius: 3}} onClick={()=>props.onClick()} danger>
                                            <CloseOutlined />
                                        </Button>
                                    </div>
                                    </div>
                                </div>
    );
}

function Card(props)
{
    return(
        <div style={{height: 'auto', width : '95%', display: 'flex', padding: 12, flexDirection : 'column', borderWidth: 1, borderRadius:3, borderStyle: 'solid', borderColor: '#DCDCDC'}}>
            <div style={{fontFamily:'Roboto', color:'#005B9C', fontSize: 18}}>
                Как какать?
            </div>
            <div>
                На сегодня государство недополучает миллиарды налогов из-за того, что работающие на официальной работе или приезжие граждане работают 
            </div>
        </div>
    );
}