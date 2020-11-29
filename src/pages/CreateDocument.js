import React, {useEffect, useState, useRef} from 'react'
import {Layout, Row, Col, Image, Button, Input, Upload, Modal, Select} from 'antd';
import { useHistory } from "react-router";
import {AppstoreOutlined, TableOutlined, DownOutlined, CheckOutlined, CloseOutlined, PlusOutlined, FileAddOutlined, UploadOutlined, AudioOutlined} from "@ant-design/icons";
import Title from "../components/Title"
import Form from "../components/Form"
import add from './add.png'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const { TextArea } = Input;

const fileList = [
  ];


  var tableTextStyle = {
        fontFamily: 'Roboto', 
        marginBottom: 3, 
        fontSize: 14,
        fontWeight: 400
  }

  var tableInputStyle = {
      fontSize: 14, 
      color: 'B4B4B4', 
      fontFamily: 'Roboto', 
      marginBottom: 20, 
      borderRadius: 5
    }

    
export default (props) => {

    const useHasChanged= (val) => {
        const prevVal = usePrevious(val)
        return prevVal !== val
    }

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
        ref.current = value;
        });
        return ref.current;
    }

    var data = [{title: "Улучшение трубопровода", descr: "Улучшение трубопроводаУлучшение трубопроводаУлучшение трубопроводаУлучшение трубопровода"}, {title: "Улучшение прокладки проводов", descr: "Улучшение прокладки проводовУлучшение прокладки проводовУлучшение прокладки проводов"}]
    var usersDb = [{name: "Сергей", lastName: "Воронежский", photo: "https://img.freepik.com/free-photo/portrait-of-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" }, {name: "Владимир", lastName: "Кураткин", photo: "https://www.mosoblduma.ru/upload/site1/djdj.jpg" }]

    var { transcript, interimTranscript, resetTranscript } = useSpeechRecognition()

    const [authors, setAuthors] = useState([])
    const [expences, setExpences] = useState([])
    const [times, setTimes] = useState([])
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [showSimilarities, setShowSimilarities] = useState(false)
    const [authorsPhotos, setAuthorsPhotos] = useState(['https://www.modnapricha.info/wp-content/uploads/2019/12/top-strizhek-dlya-kvadratnoj-formy-lica3.jpg'])
    const [addUserModal, setAddUserModal] = useState(false)
    const [userSearchField, setUserSearchField] = useState('')
    const [descrData, setDescrData] = useState('')
    const [voiceOn, setVoiceOn] = useState(false)
    const [elasticData, setElasticData] = useState([]);
    const voiceInput = useHasChanged(transcript)

    const fetchElastic = async () => {
        var response = await fetch('https://corser-any.herokuapp.com/84.201.137.231:9200/rosseti2/topics/_search?' + new URLSearchParams({
            q: 'name:' + title,
            pretty: false
        }))
        var responseJson = await response.json();
        console.log(responseJson)
        return responseJson;
    }

    useEffect(() => {
        if (voiceInput ) {
            setDescrData(transcript)
        }
    });

    var showSimilar = <div />;

    if(showSimilarities && elasticData.length > 0)
    {
        showSimilar = ( 
                <div  style={{marginBottom: 10}}>
                    <SimilarInitiatives similar={elasticData} />
                </div>
        )
    }
    const history = useHistory();

    function getElasticArray(j)
    {
        if(j != null)
            {
                if(j.hits != null)
                {
                    if(j.hits.hits != null)
                    {
                        return j.hits.hits;
                    }
                }
            }
        return [];
    }

    useEffect(() => {
        fetchElastic().then((data) => {
            setElasticData(getElasticArray(data));
        } 

    );
}, [title]);
console.log(elasticData);
    return (
        <div>
        <Modal
            title="Подтвердите оригинальность идеи"
            visible={visible}
            onOk={()=>{setVisible(false); history.push({pathname:  "/latest"}) }}
            onCancel={()=>{setVisible(false)}}
            okText={"Подтверждаю"}
            cancelText={"Еще нет"}
            cancelButtonProps={{danger: true}}
        >
            <p>Подтвердите, что подаваемое рацпредложение соответствует критериям рационализации (новизна, полезность).</p>
        </Modal>
        <Modal
            title="Поиск участника"
            visible={addUserModal}
            onOk={()=>{setAddUserModal(false); setUserSearchField('')}}
            onCancel={()=>{setAddUserModal(false); setUserSearchField('')}}
            okText={"Добавить"}
            cancelText={"Отменить"}
            cancelButtonProps={{danger: true}}
        >
            <div>
                <Input placeholder="Введите имя и фамилию пользователя..." style={tableInputStyle} value={userSearchField} onChange={(data) => { setUserSearchField(data.target.value);}}/>
                <div>
                    {
                        usersDb
                            .filter((item) => ((item.name + " " + item.lastName).toLocaleLowerCase()
                            .includes(userSearchField.toLocaleLowerCase()) && userSearchField != ''))
                            .map((item, index) => {
                                return(
                                    <Row style={{marginBottom: 10}}>
                                        <Col span={8} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}><img width={75} height={75} src={item.photo} style={{borderRadius: 50}}/></Col>
                                        <Col span={16} style={{fontSize: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                            <div>
                                                {item.name + " " + item.lastName}
                                            </div>
                                            <div>
                                                <Button onClick={()=>{setAuthorsPhotos([...authorsPhotos, item.photo]); setAddUserModal(false); setUserSearchField('')}}>Добавить</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                );
                            })
                    }
                </div>
            </div>
        </Modal>
            <div style={{backgroundColor: "white"}}>
                <div style={{marginLeft: 50, marginRight: 50, marginTop: 25, backgroundColor: 'white'}}>
                    <div className="site-layout-background" style={{
                        padding: '0 24px',
                        overflow: 'auto',
                        backgroundColor: 'white'
                    }}>
                        
                        <Row>
                            <Col span={5} />
                            <Col span={14} style={{paddingBottom: 40, paddingTop: 40, paddingLeft: 50, paddingRight: 50, margin: 10, boxShadow: '0px 0px 5px 0px #ECECEC', borderRadius: 5}}>
                                <div>
                                    <div style={tableTextStyle}>
                                        Наименование
                                    </div>
                                    <div>
                                        <Input placeholder="Заголовок" style={tableInputStyle} onChange={(data) => { setTitle(data.target.value); if(data.target.value == ''){setShowSimilarities(false)}else{setShowSimilarities(true)}}}/>
                                    </div>
                                </div>
                                {
                                    showSimilar
                                }
                                <div style={{marginBottom: 10, marginTop: -5}}>
                                    <div style={tableTextStyle}>
                                        Категория
                                    </div>
                                    <div> 
                                        <Select size={"middle"} defaultValue="Тех. процесс" style={{ width: 150 }}>
                                            <Select value="Тех. процесс">Тех. процесс</Select>
                                            <Select value="Сервисы">Сервисы</Select>
                                            <Select value="Digital">Digital</Select>
                                            <Select value="Безопасность">Безопасность</Select>
                                            <Select value="Другое">Другое</Select>
                                        </Select>    
                                    </div>
                                </div>
                                <div>
                                    <div style={tableTextStyle}>
                                        Решение
                                    </div>
                                    <div style={tableTextStyle}>
                                        <Button danger={voiceOn == true ? true : false} onClick={async ()=>{ setVoiceOn(!voiceOn); voiceOn == false ? SpeechRecognition.startListening({continuous: true, language: 'ru'}) : SpeechRecognition.stopListening();}}><AudioOutlined /></Button>
                                    </div>
                                    <div>
                                        <TextArea suffix={<AudioOutlined />}  rows={10} placeholder="Опешите решение..." style={tableInputStyle} value={descrData} onChange={(data)=>{setDescrData(data.target.value); interimTranscript  = data.target.value}}></TextArea>
                                    </div>
                                </div>
                                <div style={{paddingBottom : 15}}>
                                    <div style={tableTextStyle}>
                                        Файлы
                                    </div>
                                    <div>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            defaultFileList={[...fileList]}
                                            className="upload-list-inline"
                                        >
                                            <Button><PlusOutlined />Добавить файл</Button>
                                        </Upload>
                                    </div>
                                </div>
                                <div>
                                    <div style={tableTextStyle}>
                                        Авторы
                                    </div>
                                    <div>
                                        <AuthorsPhotos photos={authorsPhotos} onAdd={()=>{setAddUserModal(true)}}/>
                                    </div>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Col span={18} style={{fontSize: 18}}>
                                    </Col>
                                    <Col span={6}>
                                    <Button onClick={()=>{setVisible(true)}} type="primary" shape="round" icon={<PlusOutlined />} size={"middle"} color={"#008A60"} style={{float: 'right'}}>
                                        Добавить инициативу
                                    </Button>
                                    </Col>
                                </div>
                            </Col>
                            <Col span={5} />
                        </Row>
                    </div>
                </div>
            </div>
            </div>
    )
}

function AuthorsPhotos(props)
{
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{borderColor: 'C4C4C4', marginRight: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={()=>{props.onAdd()}}>
                <img src={add} width={65} height={65}/>
            </div>
            
            {
                props.photos.map((item, index) => {
                    return <img src={item} width={65} height={65} style={{marginRight: 10, borderRadius: 50}} /> 
                })
            }
        </div>
    )
}

function SimilarInitiatives(props)
{
    return(
        <div>
        <div style={{color: '#005B9C', fontSize: 14, marginBottom: 10}}>
                Упс! Возможно, такая инициатива уже выдвигалась...  
        </div>
        <div style={{borderColor: '#c7c7c7', borderRadius: 5, borderStyle: 'solid', borderWidth: 1, padding: 15}}>
            {
                props.similar.map((item, index) => {
                    return (<div>
                        <div style={{color: '#005B9C', fontSize: 14, fontFamily: 'Roboto'}}>
                            {
                                item._source.name
                            }
                        </div>
                        <div style={{fontSize: 12, fontFamily: 'Roboto', borderBottom: 2, borderTop: 0, borderRight: 0, borderLeft: 0, borderColor: '#F0F0F0', paddingBottom: (index + 1) != props.similar.length ? 5 : 0 , marginBottom: (index + 1) != props.similar.length ? 5 : 0, borderStyle: (index + 1) != props.similar.length ? 'solid' : 'none'}}>
                            {
                                item._source.description.slice(0, 50)
                            }
                        </div>
                    </div>);
                })
            }
        </div>
        </div>
    );
}

function ListOfExtences(props)
{
    return(
        props.expences.map((item, index) =>
        {
            return(
                <div>
                    <Row>
                        <Col span={12}><Input placeholder={item.name} style={{width: '80%'}} /></Col>
                        <Col span={12}><Input placeholder={item.name} style={{width: '80%'}} /></Col>
                    </Row>
                </div>
            )
        }
        )
    );
}

function ListOfTimes(props)
{
    return(
        props.times.map((item, index) =>
        {
            return(
                <div>
                    <Row>
                        <Col span={12}><Input placeholder={item.name} style={{width: '80%'}} /></Col>
                        <Col span={12}><Input placeholder={item.name} style={{width: '80%'}} /></Col>
                    </Row>
                </div>
            )
        }
        )
    );
}

function ListOfAuthors(props)
{

    return(
        props.authors.map((item, index)=>{
            return (
                <div>
                    <Row>
                        <Col span={20}>
                            <Row style={{display: 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
                                <Col span={8} >
                                    <div>
                                        Имя:
                                    </div>
                                    <div>
                                        <Input placeholder={item.name} style={{width: '80%'}} />
                                    </div>
                                </Col>
                                <Col span={8}>   
                                    <div>
                                        Фамилия:
                                    </div>
                                    <div>
                                        <Input placeholder={item.lastname} style={{width: '80%'}}/>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div>
                                        Очество:
                                    </div>
                                    <div>
                                        <Input placeholder={item.surename} style={{width: '80%'}}/>
                                    </div>    
                                </Col>
                            </Row>
                            Должность:
                            <Input placeholder={item.position} />
                            Структурное подразделение:
                            <Input placeholder={item.structure} />
                            Год рождения:
                            <Input placeholder={item.bornyear} />
                            Распределение вознагражздения:
                            <Input placeholder={item.percent} />
                        </Col>
                        <Col span={4} style={{flexDirection: 'column', justifyContent: 'center', alignItems : 'center', display : 'flex'}}>
                            <Button onClick={()=>{props.deleteUser(index - 1)}} >Удалить</Button>
                        </Col>
                    </Row>
                    
                </div>
            );
        })    
    )
}