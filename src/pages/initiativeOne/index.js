import React, { useEffect, useState } from 'react'
import { Button, Layout, Image, Row, Col, Input, Modal } from 'antd';
import { Icon } from '@iconify/react';
import eyeFilled from '@iconify-icons/ant-design/eye-filled';
import caretDownFilled from '@iconify-icons/ant-design/caret-down-filled';
import caretUpFilled from '@iconify-icons/ant-design/caret-up-filled';
import './init.css'


export default (props) => {
    const [data, setData] = useState({ rates: 21 })
    const [fromTelegram, setFromTelegram] = useState([])

    useEffect(() => {
        fetchDataComents().then(data => {
            setFromTelegram(data)
        })
    })

    const fetchDataComents = async () => {
        var response = await fetch("https://corser-any.herokuapp.com/84.201.137.231:5000/get_messages", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                topic: "Распределение налогов"
            })
        });
        var responseJson = await response.json();
        console.log(responseJson)
        return responseJson;
    }

    const fetchData = () => {
        return data;
    }

    const changeData1 = (newData) => {
        setData(newData);
    }


    const [initiatData, setInitiatData] = useState(fetchData())

    const [comm, setComm] = useState()

    console.log(comm);

    const [count, setCount] = useState(0);

    const [rates, setRates] = useState(12);
    const [ratesCh, setRatesCh] = useState(0);
    
    const [inerCom, setInerCom] = useState([
        {
            user_name: "Михаиль Круть",
            message: "Довольно интересное решение но я считаю что его необходимо дорабьотать следующим образом.",
            data: "28.11.2020 18:32:29"
        },
        {
            user_name: "Иван Иванов",
            message: "Меня не устраивают следующие моменты в этой инициативе",
            data: "27.11.2020 18:31:12"
        },
        {
            user_name: "Денис Древесный",
            message: "Работающие на официальной работе или приезжие граждане работают неофициально",
            data: "27.11.2020 18:25:53"
        },
    ]);

    const { Header } = Layout;
    return (
        <InitiativeOne name={"Михаил Иванов"} photo={"https://u-muzhchin.ru/wp-content/uploads/2020/06/9erSJwgZn_s.jpg"}
            textProblem={"На сегодня государство недополучает миллиарды налогов из-за того, что работающие на официальной работе или приезжие граждане работают неофициально. Например ремонтируют квартиры, таксуют, перепродают. С другой стороны для ИП есть обязательные налоги, которые в случае небольших подработок просто нереально выплатить. Также, например для такси, есть масса требований, которые нет смысла требовать от людей, подвозящих по пути пассажиров три-четыре раза в неделю. Это и оклейка машины, и квитанции, и медосмотры."}
            textSolve={"На сегодня государство недополучает миллиарды налогов из-за того, что работающие на официальной работе или приезжие граждане работают неофициально. Например ремонтируют квартиры, таксуют, перепродают. С другой стороны для ИП есть обязательные налоги, которые в случае небольших подработок просто нереально выплатить. Также, например для такси, есть масса требований, которые нет смысла требовать от людей, подвозящих по пути пассажиров три-четыре раза в неделю. Это и оклейка машины, и квитанции, и медосмотры. "}
            textEconomic={"На сегодня государство недополучает миллиарды налогов из-за того, что работающие на официальной работе или приезжие граждане работают неофициально. Например ремонтируют квартиры, таксуют, перепродают. С другой стороны для ИП есть обязательные налоги, которые в случае небольших подработок просто нереально выплатить. Также, например для такси, есть масса требований, которые нет смысла требовать от людей, подвозящих по пути пассажиров три-четыре раза в неделю. Это и оклейка машины, и квитанции, и медосмотры."}
            dataInic={"12.10.2020 19:23"} title={"Распределение налогов"} rate={rates + ratesCh}
            textCoast={"100.000"} textTime={"10"}
            changeData={(newData) => (setRatesCh(newData))}
            coment={fromTelegram}

            sendComment={(newData) => (setInerCom([...inerCom.reverse(),newData].reverse()))}
            inerComment={inerCom}
        />
    )
}

function postData() {
    var response = fetch("https://corser-any.herokuapp.com/84.201.137.231:5000/invite_user", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user_name: "rosseti_test",
            topic: "Распределение налогов"
        })
    }).then((resp) => resp.text()).then((res) => console.log(res));
}

function InitiativeOne(props) {

    const [isLoading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false)

    const { Content } = Layout;
    return (
        <div>
            <Modal
                title="Телеграмм"
                visible={visible}
                onOk={() => {
                    setVisible(false)
                }}

                okText={"Ок"}

            >
                <p style={{ fontSize: 16, textAlign: 'center' }}>Вы были добавленны в телеграмм беседу</p>
            </Modal>
            <Layout className="wrapper" style={{ backgroundColor: "white" }}>
                <Layout style={{ backgroundColor: "white" }}
                    style={{ color: "#D8E9FF", flex: "none", backgroundColor: "white" }}>
                    <div className={"initiative"}>
                        <Row>
                            <Layout style={{
                                marginTop: 20,
                                marginLeft: '5vw',
                                marginRight: '1vw',
                                width: '60vw',
                                backgroundColor: "white"
                            }}>

                                <Content className="site-layout-background" style={{
                                    padding: '0 15px',
                                    overflow: 'auto',
                                    borderRadius: 15
                                    , width: '65vw',
                                    boxShadow: '0px 3px 8px 0px #ECECEC',
                                }}>
                                    <Row>
                                        <Col>
                                            <div style={{
                                                margin: 10,
                                                marginBottom: 0,
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "space-between"
                                            }}>
                                                <div style={{ display: "flex", flexDirection: "row", }}>
                                                    <span style={{ fontWeight: 400, fontSize: 30, color: "black" }}>
                                                        {props.title}
                                                    </span>
                                                    <div style={{ display: "flex", flexDirection: "row", marginTop: 8 }}>
                                                        <Icon icon={eyeFilled} style={{
                                                            color: "lightGray",
                                                            marginLeft: 15,
                                                            marginTop: 10
                                                        }} height={18} />
                                                        <span style={{
                                                            fontWeight: 300,
                                                            fontSize: 22,
                                                            color: "lightGray",
                                                            marginLeft: 5
                                                        }}>
                                                            {"2.4k"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <Button type="primary" shape="round" size={22} style={{ marginTop: 10 }}>
                                                    <span style={{
                                                        fontWeight: 500,
                                                        fontSize: 14,
                                                        color: "white"
                                                    }}> {"Одобрить"} </span>
                                                </Button>
                                            </div>


                                            <div style={{ display: "flex", flexDirection: "column", marginBottom: 0 }}>
                                                <div className={"profile-container"}
                                                    style={{ float: "left", flex: "none", marginBottom: 0 }}
                                                    width={'70vw'} height={50}>
                                                    <div style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        marginBottom: 0,
                                                        justifyContent: "space-between"
                                                    }}>
                                                        <div style={{ display: "flex", flexDirection: "row", }}>
                                                            <Image src={props.photo} width={50} height={50} style=
                                                                {{
                                                                    margin: 10,
                                                                    float: "right",
                                                                }} />
                                                            <Row height={50}>
                                                                <Col className="gutter-row">
                                                                    <div style={{ margin: 10, marginBottom: 0 }}
                                                                        width={'70vw'}>
                                                                        <span style={{
                                                                            fontWeight: 600,
                                                                            fontSize: 16,
                                                                            color: "black"
                                                                        }}>
                                                                            {props.name}
                                                                        </span>
                                                                    </div>
                                                                    <div style={{ marginLeft: 10 }}>
                                                                        <span style={{
                                                                            fontWeight: 300,
                                                                            fontSize: 12,
                                                                            color: "gray"
                                                                        }}>
                                                                            {props.dataInic}
                                                                        </span>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <Button type="danger" shape="round" style={{ marginTop: "10px" }}
                                                            size={22}>
                                                            <span style={{
                                                                fontWeight: 500,
                                                                fontSize: 14,
                                                                color: "white"
                                                            }}> {"Корректировать"} </span>
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div style={{ margin: 10, marginBottom: 0, }}>

                                                    <span style={{ fontWeight: 500, fontSize: 16, color: "black" }}>
                                                        {"Описание проблемы:"}
                                                    </span>
                                                    {/*   <span style={{ fontWeight: 400, fontSize: 14, color: "black", float: "left", textAlign: "justify" }}>
                                                    {props.textProblem}
                                                </span>
                                                <span style={{ fontWeight: 500, fontSize: 16, color: "black", float: "left" }}>
                                                    {"Предлагаемое решение:"}
                                                </span>
                                                <span style={{ fontWeight: 400, fontSize: 14, color: "black", float: "left", textAlign: "justify" }}>
                                                    {props.textSolve}
                                                </span>
                                                <span style={{ fontWeight: 500, fontSize: 16, color: "black", float: "left" }}>
                                                    {"Экономический эффект:"}
                                                        </span>*/}
                                                    <span style={{
                                                        fontWeight: 400,
                                                        fontSize: 14,
                                                        color: "black",
                                                        float: "left",
                                                        textAlign: "justify"
                                                    }}>
                                                        {props.textProblem}
                                                    </span>
                                                </div>

                                                <span style={{
                                                    marginLeft: 10,
                                                    fontWeight: 500,
                                                    fontSize: 16,
                                                    color: "black",
                                                    float: "left"
                                                }}>
                                                    {"Затраты на вредрение:"}
                                                </span>
                                                <span style={{
                                                    marginLeft: 10,
                                                    fontWeight: 400,
                                                    fontSize: 16,
                                                    color: "black",
                                                    float: "left",
                                                    textAlign: "justify"
                                                }}>
                                                    {props.textCoast + " руб."}
                                                </span>
                                                <span style={{
                                                    marginLeft: 10,
                                                    fontWeight: 500,
                                                    fontSize: 16,
                                                    color: "black",
                                                    float: "left"
                                                }}>
                                                    {"Сроки на вредрение:"}
                                                </span>
                                                <span style={{
                                                    marginLeft: 10,
                                                    fontWeight: 400,
                                                    fontSize: 16,
                                                    color: "black",
                                                    float: "left",
                                                    textAlign: "justify"
                                                }}>
                                                    {props.textTime + " дней"}
                                                </span>
                                                <span style={{
                                                    marginLeft: 10,
                                                    fontWeight: 500,
                                                    fontSize: 16,
                                                    color: "black",
                                                    float: "left"
                                                }}>
                                                    {"Прикрепленные документы:"}
                                                </span>

                                                <div className={"iconslist"}
                                                    style={{ justifyContent: "flex-start", marginBottom: 0, }}>

                                                    <Image src={"https://telegra.ph/file/4662c220cae1721f0ecf8.jpg"}
                                                        width={100} height={100} style=
                                                        {{
                                                            margin: 10,
                                                            marginTop: 15,
                                                            marginBottom: 5,
                                                            float: "left",
                                                        }} />
                                                    <Image src={"https://telegra.ph/file/4662c220cae1721f0ecf8.jpg"}
                                                        width={100} height={100} style=
                                                        {{
                                                            margin: 10,
                                                            marginTop: 15,
                                                            marginBottom: 5,
                                                            float: "left",
                                                        }} />
                                                    <Image src={"https://telegra.ph/file/4662c220cae1721f0ecf8.jpg"}
                                                        width={100} height={100} style=
                                                        {{
                                                            margin: 10,
                                                            marginTop: 15,
                                                            marginBottom: 5,
                                                            float: "left",
                                                        }} />
                                                    <Image src={"https://telegra.ph/file/4662c220cae1721f0ecf8.jpg"}
                                                        width={100} height={100} style=
                                                        {{
                                                            margin: 10,
                                                            marginTop: 15,
                                                            marginBottom: 5,
                                                            float: "left",
                                                        }} />
                                                </div>

                                                <a class="Link Link_theme_normal OrganicTitle-Link"
                                                    href="http://84.201.137.231:5001/get-file">
                                                    <span style={{
                                                        margin: 10,
                                                        fontWeight: 500,
                                                        fontSize: 18,
                                                        color: "blue",
                                                        fontStyle: "inherit",
                                                        float: "left"
                                                    }}>
                                                        {"Скачать документ заявления"}
                                                    </span>
                                                </a>
                                            </div>
                                        </Col>

                                    </Row>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: "row",
                                        justifySelf: "end",
                                        justifyContent: "end",
                                        justifyItems: "end",
                                        marginBottom: 0
                                    }}>
                                        <div style={{ width: '95%' }} />
                                        <Button type="link" shape="round"
                                            icon={<Icon icon={caretDownFilled} style={{ color: "red", }}
                                                height={22} />} size={25}
                                            onClick={() => {
                                                props.changeData(-1)
                                            }}
                                        ></Button>
                                        <span style={{
                                            fontWeight: 300,
                                            fontSize: 26,
                                            color: "green"
                                        }}> {props.rate} </span>
                                        <Button type="link" shape="round"
                                            icon={<Icon icon={caretUpFilled} style={{ color: "green" }} height={22} />}
                                            size={25}
                                            onClick={() => {
                                                props.changeData(1)
                                            }}
                                        ></Button>
                                    </div>

                                </Content>

                            </Layout>

                            <Layout style={{
                                marginTop: 20,
                                marginLeft: '1vw',
                                marginRight: '0vw',
                                width: '15vw',
                                color: "#00000000",
                                background: "#00000000"
                            }}>
                                <Content className="site-layout-background" style={{
                                    padding: '0 15px',
                                    overflow: 'auto',
                                    borderRadius: 15
                                    , width: '20vw', color: "#00000000", background: "#00000000"
                                }}>
                                    <Button type="primary" shape="round" style={{ marginLeft: "1vw" }} onClick={() => {
                                        setVisible(true);
                                        postData();
                                    }}
                                        size={22}>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <span style={{
                                                fontWeight: 500,
                                                fontSize: 14,
                                                color: "white"
                                            }}> {"Обсуждение в телеграмм"} </span>
                                            <div style={{ width: '10px', }} />
                                            <img width="22" height="22"
                                                src="https://www.flaticon.com/svg/static/icons/svg/739/739158.svg"
                                                alt="Telegram" title="Telegram" class="loaded" />
                                        </div>
                                    </Button>
                                    {props.coment == null || props.coment.length == 0 ? <div /> :
                                        props.coment.length == 1 ?
                                            <div>
                                                <ComentTelegOne name={props.coment[0]?.user_name} text={props.coment[0]?.message} />
                                            </div>
                                            :
                                            props.coment.length == 2 ?
                                                <div>
                                                    <ComentTelegOne name={props.coment[0]?.user_name} text={props.coment[0]?.message} />
                                                    <ComentTelegOne name={props.coment[1]?.user_name} text={props.coment[1]?.message} />
                                                </div>
                                                :
                                                props.coment.length == 3 ?
                                                    <div>
                                                        <ComentTelegOne name={props.coment[0]?.user_name} text={props.coment[0]?.message} />
                                                        <ComentTelegOne name={props.coment[1]?.user_name} text={props.coment[1]?.message} />
                                                        <ComentTelegOne name={props.coment[2]?.user_name} text={props.coment[2]?.message} />
                                                    </div>
                                                    :
                                                    props.coment.length == 4 ?
                                                        <div>
                                                            <ComentTelegOne name={props.coment[0]?.user_name} text={props.coment[0]?.message} />
                                                            <ComentTelegOne name={props.coment[1]?.user_name} text={props.coment[1]?.message} />
                                                            <ComentTelegOne name={props.coment[2]?.user_name} text={props.coment[2]?.message} />
                                                            <ComentTelegOne name={props.coment[3]?.user_name} text={props.coment[3]?.message} />
                                                        </div>
                                                        :
                                                        <div>
                                                            <ComentTelegOne name={props.coment[0]?.user_name} text={props.coment[0]?.message} />
                                                            <ComentTelegOne name={props.coment[1]?.user_name} text={props.coment[1]?.message} />
                                                            <ComentTelegOne name={props.coment[2]?.user_name} text={props.coment[2]?.message} />
                                                            <ComentTelegOne name={props.coment[3]?.user_name} text={props.coment[3]?.message} />
                                                            <ComentTelegOne name={props.coment[4]?.user_name} text={props.coment[4]?.message} />
                                                        </div>
                                    }
                                </Content>
                            </Layout>
                        </Row>
                        <Row>
                            <Layout style={{
                                marginTop: 20,
                                marginLeft: '5vw',
                                marginRight: '2vw',
                                width: '60vw',
                                backgroundColor: "white"
                            }}>

                                <Content className="site-layout-background" style={{
                                    padding: '0 15px',
                                    overflow: 'auto',
                                    borderRadius: 15
                                    , width: '60vw',
                                    background: "#00000000"
                                }}>
                                    <span style={{
                                        fontWeight: 500,
                                        fontSize: 22,
                                        color: "black",
                                        textJustify: "auto",
                                        marginLeft: 10
                                    }}> {"Комментарии: " + props.inerComment.length} </span>
                                    <br></br>


                                    <MakeComentOne
                                        sendComment={(newData) => (props.sendComment(newData))}
                                    />
                                    {
                                        props.inerComment.map((elem) =>
                                            <ComentOne
                                                name={elem.user_name} data={elem.data}
                                                text={elem.message}
                                                photo={"https://u-muzhchin.ru/wp-content/uploads/2020/06/9erSJwgZn_s.jpg"}
                                            />)
                                    }
                                </Content>
                            </Layout>

                            <Layout style={{
                                marginTop: 20,
                                marginLeft: '2vw',
                                marginRight: '2vw',
                                width: '15vw',
                                color: "#00000000",
                                background: "#00000000"
                            }}>
                                <Content className="site-layout-background" style={{

                                    padding: '0 15px',
                                    overflow: 'auto',
                                    borderRadius: 15
                                    , width: '15vw'
                                    , color: "#00000000", background: "#00000000"
                                }}>
                                </Content>
                            </Layout>
                        </Row>

                    </div>
                </Layout>


                <Layout.Footer style={{ textAlign: 'center', backgroundColor: "white" }}>Россети</Layout.Footer>
            </Layout>
        </div>
    )
}


function ComentTelegOne(props) {
    return (
        <div style={{
            height: 'auto',
            width: '95%',
            display: 'flex',
            padding: 12,
            paddingBottom: 0,
            flexDirection: 'column',
            borderWidth: 0,
            borderRadius: 3,
            borderStyle: 'solid',
            borderColor: '#DCDCDC'
        }}>
            <div style={{ fontFamily: 'Roboto', color: 'black', fontSize: 18 }}>
                {props.name}
            </div>
            <div style={{ fontFamily: 'Roboto', color: 'black', fontSize: 14 }}>

                {props.text}
            </div>
        </div>
    );
}


function ComentOne(props) {
    return (
        <div style={{
            height: 'auto',
            width: '95%',
            display: 'flex',
            padding: 12,
            paddingBottom: 0,
            flexDirection: 'column',
            borderWidth: 0,
            borderRadius: 3,
            borderStyle: 'solid',
            borderColor: '#DCDCDC'
        }}>
            <div className={"profile-container"} style={{ float: "left", flex: "none" }} width={'70vw'} height={50}>
                <Row height={50}>
                    <Image src={props.photo} width={50} height={50} style=
                        {{
                            margin: 10,
                            float: "right",
                        }} />
                    <Row height={50}>
                        <Col className="gutter-row">
                            <div style={{ margin: 10, marginBottom: 0, marginLeft: 2 }} width={'70vw'}>
                                <span style={{ fontWeight: 600, fontSize: 16, color: "black" }}>
                                    {props.name}
                                </span>
                            </div>
                            <div style={{ marginLeft: 2 }}>
                                <span style={{ fontWeight: 300, fontSize: 12, color: "gray" }}>
                                    {props.data}
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </div>

            <div style={{ margin: 10, marginTop: 0 }}>
                <span style={{ fontWeight: 400, fontSize: 14, color: "black", float: "left", textAlign: "justify" }}>
                    {props.text}
                </span>
            </div>
        </div>
    );
}

function MakeComentOne(props) {
    return (<Input
        onPressEnter = {(e) => {props.sendComment({message: e.target.value, user_name: "Дарья Сергеевна Золоторева", data: (new Date()).toLocaleString() });
                         e.target.value = "";}}
        style={{ marginTop: "15px" }} placeholder="Отзыв..." size={'large'} 
    />);
}