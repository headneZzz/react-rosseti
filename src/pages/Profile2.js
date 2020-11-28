import React, {useState} from 'react'
import {Link} from "react-router-dom";  
import {Layout, Row, Col, Image, Button, Input, Tooltip} from 'antd';
import {AppstoreOutlined, TableOutlined, DownOutlined, CheckOutlined, CloseOutlined, InfoCircleOutlined, FormOutlined} from "@ant-design/icons";
import Title from "../components/Title"
import Form from "../components/Form"
export default (props) => {

    const data = {name: "Дарья Золоторева", email: "darya@rosseti.ru", password: 'secret'}
    
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
                                    
                                    <Row style={{fontFamily:'Raleway', fontSize: 20, marginBottom : 20, marginTop: 10, marginBottom: 10, fontWeight: 600, display: 'flex', flexDirection: 'row'}}>
                                        <div style={{alignSelf: 'center', margin: 5, marginTop: 2}}>
                                            Инициативы
                                        </div>
                                        <div style={{alignSelf: 'center'}}>
                                            <Tooltip placement="bottomLeft"  title={ 
                                                <div>
                                                    <p>
                                                        Все предложения проходят тщательный отбор и несколько стадий модерации.
                                                    </p>
                                                    <p>
                                                        <b>Первый Этап</b>: после подачи рацианализаторского предложения в краткой форме, оно попадает на первичную оценку экспертом, а также становится доступным для народного обсуждения.
                                                    </p>
                                                    <p>
                                                        <b>Второй Этап</b>: после прохождения первого этапа модерации, вам будет предложено формально описать детали реализации рацианализаторского предложения, после чего оно будет отправлено на второй этап модерации.
                                                    </p>
                                                    <p>
                                                        <b>Третий Этап</b>: Поздравляем! Ваше предложение взято в реализацию. 
                                                    </p>
                                                </div>
                                            }>
                                                <InfoCircleOutlined style={{color: '#005B9C'}} />
                                            </Tooltip>
                                        </div>
                                    </Row>
                                    
                                    <Row style={{display: 'block'}}>
                                    <Row style={{paddingBottom: 20}}>
                                        <Col span={12} ><Card type={"stage2"} title={"Сокращение транспортных расходов предприятия"} desc={"Сокращение транспортных расходов."} /> </Col>
                                   
                                        <Col span={12} > <Card type={"stage1"} title={"Тестовый топик"} desc={"С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития."} /> </Col>
                                         </Row>
                                    <Row style={{paddingBottom: 20}}>
                                            <Col span={12} ><Card type={"stage1"} title={"Тестовая статья"} desc={"Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов)."} /> </Col>
                                        
                                        <Col span={12} > <Card type={"stage3"} title={"Распределение налогов"} desc={"Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений."} /> </Col>
                                        </Row>
                                    <Row style={{paddingBottom: 20}}>
                                        <Col span={12} ><Card type={"stage1"} title={"Россети тестовая статья"} desc={"Равным образом консультация с широким активом требуют определения и уточнения модели развития. "} /> </Col>
            
                                        <Col span={12} > <Card type={"stage3"} title={"Росссети"} desc={"Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений."} /> </Col>
                                        </Row>
                                    <Row style={{paddingBottom: 20}}> 
                                        <Col span={12} ><Card type={"stage3"} title={"Расширение транспортной сети"} desc={"Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития."} /> </Col>
                        
                                        <Col span={12} ><Card type={"decline"} title={"Тестовая статья"} desc={"Равным образом консультация с широким активом требуют определения и уточнения модели развития."} /> </Col>
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
                                    <Image src={"https://www.modnapricha.info/wp-content/uploads/2019/12/top-strizhek-dlya-kvadratnoj-formy-lica3.jpg"} width={175} height={175} style=
                                    {{
                                        marginBottom: 15,
                                        borderRadius: 50
                                    }}/>
                                    <div style={{fontFamily: 'Raleway', fontSize: 24, fontWeight: 600, marginBottom: 10}}>
                                        Дарья Золоторева
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
                                    <img src={"https://www.modnapricha.info/wp-content/uploads/2019/12/top-strizhek-dlya-kvadratnoj-formy-lica3.jpg"} width={175} height={175} style=
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
                                        <Input placeholder={"+7999000000"} size={'large'}/>
                                    </div>
                                    <div style={{marginBottom: 10}}>
                                        <Input placeholder="Новый пароль" size={'large'}/>
                                    </div>
                                    <div style={{marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                                        <Button type="primary" size={"large"} style={{width:'45%', borderRadius: 3}} onClick={()=>{props.changeData({name: "Дора Дура2", email: "zolotareva@rosseti.ru", password: 'secret'})}}>
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
    var color = ()=>
    {
        if(props.type == "stage1")
        {
            return ("#008A60")
        }
        if(props.type == "stage2")
        {
            return ("#008A60")
        }
        if(props.type == "stage3")
        {
            return ("#005B9C")
        }
        if(props.type == "decline")
        {
            return ("#eb5757")
        }
    }

    var type = ()=>
    {
        if(props.type == "stage1")
        {
            return (<div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div>
                    Этап 1.
                </div>
                <div>
                    Ожидает модерации.
                </div>
                
            </div>)
        }
        if(props.type == "stage2")
        {
            return (
                <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                        <div>
                            Этап 2.
                        </div>
                        <div>
                            Ожидает модерации.
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: 'column', justifySelf: 'center', alignSelf: 'center', fontSize: 24}}>
                    </div>
                
                </div>
            )
        }
        if(props.type == "stage3")
        {
            return (<div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <div>
                Этап 3.
            </div>
            <div>
                Принято в реализацию.
            </div>
            
        </div>)
        }
        if(props.type == "decline")
        {
            return (<div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <div>
                Отклонено.
            </div>
            
        </div>)
        }
    }

    
    

    return(
        <Link to={props.type == "stage2" ? "/editdocument" : '/initiativeOne'}>
            <div style={{height: 'auto', width : '95%', display: 'flex', padding: 12, flexDirection : 'column', borderWidth: 1, borderRadius:3, borderStyle: 'solid', borderColor: color()}}>
                <div style={{fontFamily:'Roboto', color:color(), fontSize: 18, display: "flex", flexDirection: 'column'}}>
                    <div>
                        {props.title}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', fontSize: 14}}>   
                        <div style={{width: '100%'}}>   
                            {type()}
                        </div>
                        <div>   
                        </div>
                    </div>
                </div>
                <div style={{color : 'black'}}>
                    {props.desc} 
                </div>
            </div>
            </Link>
    );
}