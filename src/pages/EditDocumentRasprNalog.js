import React, {useEffect, useState, useRef} from 'react'
import {Layout, Row, Col, Image, Button, Input, Upload, Modal, Table} from 'antd';
import { useHistory } from "react-router";
import {AppstoreOutlined, TableOutlined, DownOutlined, CheckOutlined, CloseOutlined, PlusOutlined, FileAddOutlined, UploadOutlined, AudioOutlined} from "@ant-design/icons";
import Title from "../components/Title"
import Form from "../components/Form"
import add from './add.png'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const { TextArea } = Input;



const fileList = [
    {
      uid: '-1',
      name: 'План.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-1',
        name: 'Проект.docx',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
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
      
      const columns = [
        {
          title: 'Статья затрат',
          dataIndex: 'name',
          key: 'name',
          render: text => <Input  />
        },
        {
          title: 'Сумма рублей (с НДС)',
          dataIndex: 'summ',
          key: 'summ',
          render: text => <Input />
        },
      ];

      const columns2 = [
        {
          title: 'Этап',
          dataIndex: 'name',
          key: 'name',
          render: text => <Input />
        },
        {
          title: 'Срок, дней',
          dataIndex: 'time',
          key: 'time',
          render: text => <Input />
        },
      ];

      const columns3 = [
        {
          title: 'Автор',
          dataIndex: 'name',
          key: 'name',
          render: text => <Input value={text} />
        },
        {
          title: 'Вознаграждение (в %)',
          dataIndex: 'fee',
          key: 'fee',
          render: text => <Input />
        },
      ];

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

    var data = [{title: "Распределение налогов", descr: "На сегодня государство недополучает миллиарды налогов из-за того, что работающие на официальной работе или приезжие граждане работают неофициально. Например ремонтируют квартиры, таксуют, перепродают. С другой стороны для ИП есть обязательные налоги, которые в случае небольших подработок просто нереально выплатить. Также, например для такси, есть масса требований, которые нет смысла требовать от людей, подвозящих по пути пассажиров три-четыре раза в неделю. Это и оклейка машины, и квитанции, и медосмотры."}, 
    {title: "Улучшение прокладки проводов", descr: "Улучшение прокладки проводовУлучшение прокладки проводовУлучшение прокладки проводов"}]
    var usersDb = [{name: "Илья", lastName: "Крутько", photo: "https://avatars.mds.yandex.net/get-zen_doc/163385/pub_5bb70bfc049c1c00aa163781_5bb70c53ad289e00ac6bf422/scale_1200" }, {name: "Даниил", lastName: "Кудряшев", photo: "https://avatars.mds.yandex.net/get-zen_doc/1894366/pub_5dd2e74d24f3107fe3149016_5dd2e897f2b9ae76f74dc5f4/scale_1200" }]

    var { transcript, interimTranscript, resetTranscript } = useSpeechRecognition()

    const [authors, setAuthors] = useState([])
    const [expences, setExpences] = useState([])
    const [times, setTimes] = useState([])
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [showSimilarities, setShowSimilarities] = useState(false)
    const [authorsPhotos, setAuthorsPhotos] = useState(['https://www.modnapricha.info/wp-content/uploads/2019/12/top-strizhek-dlya-kvadratnoj-formy-lica3.jpg', 'https://www.mosoblduma.ru/upload/site1/djdj.jpg'])
    const [addUserModal, setAddUserModal] = useState(false)
    const [userSearchField, setUserSearchField] = useState('')
    const [descrData, setDescrData] = useState('')
    const [voiceOn, setVoiceOn] = useState(false)
    const voiceInput = useHasChanged(transcript)

    const [dataSource1, setDataSource1] = useState([
      ])

      const [dataSource2, setDataSource2] = useState([
      ])

    useEffect(() => {
        if (voiceInput ) {
            setDescrData(transcript)
        }
    });

    const [dataSource3, setDataSource3] = useState([
        {
          key: '1',
          name: 'Михаил Иванов',
          fee: '10',
        },
        {
          key: '2',
          name: 'Владимир Владимирович Кураткин',
          fee: '5',
        },
      ])

    useEffect(() => {
        if (voiceInput ) {
            setDescrData(transcript)
        }
    });

    var showSimilar = <div />;

    if(showSimilarities && data.filter((item)=>item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())).length > 0)
    {
        showSimilar = ( 
                <div  style={{marginBottom: 10}}>
                    <SimilarInitiatives similar={data.filter((item)=>item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))} />
                </div>
        )
    }
    const history = useHistory();
    const downloadFile = () => {
        window.location.href = "http://84.201.137.231:5001/get-file"
      }
    const sendMailToClient = async () => {
        await fetch('http://84.201.137.231:5005/sendemail_silent_to_client')
    }

    const sendMailToAdmin = async () => {
        await fetch('http://84.201.137.231:5005/sendemail_silent_to_admin')
    }

    return (
        <div>
        <Modal
            title="Подтвердите оригинальность идеи"
            visible={visible}
            onOk={()=>{setVisible(false); sendMailToClient(); sendMailToAdmin(); history.push({pathname:  "/selfprofile"}); downloadFile();  }}
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
                                        <Input value={"Распределение налогов"} placeholder="Заголовок" style={tableInputStyle} onChange={(data) => { setTitle(data.target.value); if(data.target.value == ''){setShowSimilarities(false)}else{setShowSimilarities(true)}}}/>
                                    </div>
                                </div>
                                {
                                    showSimilar
                                }
                                
                                <div>
                                    <div style={tableTextStyle}>
                                        Описание:
                                    </div>
                                    <div>
                                        <TextArea disabled={true} suffix={<AudioOutlined />}  rows={10} value={"На сегодня государство недополучает миллиарды налогов из-за того, что работающие на официальной работе или приезжие граждане работают неофициально. Например ремонтируют квартиры, таксуют, перепродают. С другой стороны для ИП есть обязательные налоги, которые в случае небольших подработок просто нереально выплатить. Также, например для такси, есть масса требований, которые нет смысла требовать от людей, подвозящих по пути пассажиров три-четыре раза в неделю. Это и оклейка машины, и квитанции, и медосмотры."} style={tableInputStyle} onChange={(data)=>{setDescrData(data.target.value); interimTranscript  = data.target.value}}></TextArea>
                                    </div>
                                </div>

                                <div>
                                    <div style={tableTextStyle}>
                                        Описание действительного положения с указанием существующих недостатков:
                                    </div>
                                    <div>
                                        <TextArea  suffix={<AudioOutlined />}  rows={6}  style={tableInputStyle} onChange={(data)=>{setDescrData(data.target.value); interimTranscript  = data.target.value}}></TextArea>
                                    </div>
                                </div>

                                <div>
                                    <div style={tableTextStyle}>
                                        Описание предлагаемого решения:
                                    </div>
                                    <div>
                                        <TextArea suffix={<AudioOutlined />}  rows={6} value="" style={tableInputStyle} onChange={(data)=>{setDescrData(data.target.value); interimTranscript  = data.target.value}}></TextArea>
                                    </div>
                                </div>

                                <div>
                                    <div style={tableTextStyle}>
                                        Ожидаемый положительный эффект от использования 
                                    </div>
                                    <div>
                                        <TextArea suffix={<AudioOutlined />}  rows={6} style={tableInputStyle} onChange={(data)=>{setDescrData(data.target.value); interimTranscript  = data.target.value}}></TextArea>
                                    </div>
                                </div>
                                <div>
                                    <div
                                    onClick={()=>setDataSource1([...dataSource1, {
                                        key: (dataSource1.length + 1).toString(),
                                        name: "",
                                        summ: '',
                                      }])}
                                    type="primary"
                                    style={{
                                        marginBottom: 10,
                                        color: '#1890ff',
                                        float: 'right'
                                    }}
                                    >
                                        Добавить статью затрат...
                                    </div>
                                    <Table locale={{emptyText: 'Нет данных'}} pagination={false} dataSource={dataSource1} columns={columns} />
                                </div>

                                <div style={{paddingTop: 20, paddingBottom: 20}}>
                                    <div
                                    onClick={()=>setDataSource2([...dataSource2, {
                                        key: (dataSource2.length + 1).toString(),
                                        name: "",
                                        time: '',
                                      }])}
                                    type="primary"
                                    style={{
                                        marginBottom: 10,
                                        color: '#1890ff',
                                        float: 'right'
                                    }}
                                    >
                                        Добавить этап...
                                    </div>
                                    <Table locale={{emptyText: 'Нет данных'}} pagination={false} dataSource={dataSource2} columns={columns2} />
                                </div>
                                <div style={{paddingTop: 20, paddingBottom: 20}}>
                                    <Table pagination={false} dataSource={dataSource3} columns={columns3} />
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
                                        Сохранить инициативу
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
                                item.title
                            }
                        </div>
                        <div style={{fontSize: 12, fontFamily: 'Roboto', borderBottom: 2, borderTop: 0, borderRight: 0, borderLeft: 0, borderColor: '#F0F0F0', paddingBottom: (index + 1) != props.similar.length ? 5 : 0 , marginBottom: (index + 1) != props.similar.length ? 5 : 0, borderStyle: (index + 1) != props.similar.length ? 'solid' : 'none'}}>
                            {
                                item.descr
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