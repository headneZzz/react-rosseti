import {Button, Layout, PageHeader, Spin, Row, Col, Table, Tag, Space, Input, Select} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import React from "react";
import {Link} from "react-router-dom";  
import './Header.css'

const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: text => <Link to="/initiativeOne" onClick={console.log("idi nahui")}>{text}</Link>,
    },
    {
        title: 'Категория',
        key: 'category',
        dataIndex: 'category',
        render: category => (
          <>
            {category.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
        title: 'Автор',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Ответы',
        dataIndex: 'replies',
        key: 'replies',
      },
      {
        title: 'Рейтинг',
        dataIndex: 'raiting',
        key: 'raiting',
      },
      {
        title: 'Сообщения',
        dataIndex: 'messages',
        key: 'messages',
      }
  ];
  
  const data = [
    {
      key: '1',
      name: 'Как какать',
      status: 32,
      author: 'New York No. 1 Lake Park',
      replies : "23",
      raiting : "200",
      messages : "23",
      category: ['nice'],
    },
    {
        key: '2',
        name: 'Как какать',
        status: 32,
        author: 'New York No. 1 Lake Park',
        replies : "23",
        raiting : "200",
        messages : "23",
        category: ['developer'],
      }
  ];

  const { Search } = Input;
  const onSearch = value => console.log(value);
export default (props) => {
    return (
        <div>
        <Row style={{marginBottom: 10,
        marginTop: 10}}>
                            <Col span={4}>
                            <Search placeholder="Поиск..." onSearch={()=>{}} size={"middle"} />
                            </Col>
                            <Col span={1}></Col>
                            <Col span={7} style={{height: 40}}>
                              <div style={{display: "flex", alignItems: "center", flexDirection : "row"}}>
                                <div style={{fontFamily: "Roboto", fontWeight: 500, fontSize: 16, color: "#929292", paddingRight: 20}}>
                                  Сначала:
                                </div>  
                                <Select size={"middle"} defaultValue="Популярные" style={{ width: 150 }}>
                                  <Select value="Новые">Новые</Select>
                                  <Select value="Популярные">Популярные</Select>
                                </Select>
                              </div>
                              
                            </Col>
                            <Col span={12}>
                            <Link to="/createdocument">
                              <Button type="primary" shape="round" icon={<PlusOutlined />} size={"middle"} color={"#008A60"} style={{float: 'right'}}>
                                Добавить инициативу
                              </Button>
                            </Link>
                            </Col>
                        </Row>
                        <Table columns={columns} dataSource={data} />
                        </div>
    )
}