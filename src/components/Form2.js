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
        title: 'Автор',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Рейтинг',
        dataIndex: 'raiting',
        key: 'raiting',
      },
      {
        title: 'Сообщений',
        dataIndex: 'messages',
        key: 'messages',
      },
      {
          title: 'Категория',
          key: 'category',
          dataIndex: 'category',
          render: category => (
            <>
              {category.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag.toUpperCase() === 'ТЕХ. ПРОЦЕСС') {
                  color = 'geekblue';
                }
                if (tag.toUpperCase() === 'ДРУГОЕ') {
                  color = 'green';
                }
                if (tag.toUpperCase() === 'DIGITAL') {
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
        }
  ];
  
  const data = [
    {
        key: '1',
        name: 'Сокращение транспортных расходов предприятия.',
        author: 'Дарья Сергеевна Золоторева',
        raiting : "0",
        messages : "0",
        category: ['Тех. процесс'],
    },
    {
      key: '1',
      name: 'Тестовый топик',
      author: 'Дарья Сергеевна Золоторева',
      raiting : "11",
      messages : "3",
      category: ['Тех. процесс'],
    },
    {
        key: '2',
        name: 'Тестовая статья',
        author: 'Дарья Сергеевна Золоторева',
        raiting : "10",
        messages : "5",
        category: ['Сервисы'],
      },
      {
          key: '3',
          name: 'Распределение налогов',
          author: 'Дарья Сергеевна Золоторева',
          raiting : "12",
          messages : "3",
          category: ['Другое'],
        },
        {
            key: '4',
            name: 'Россети тестовая статья',
            author: 'Дарья Сергеевна Золоторева',
            raiting : "2",
            messages : "0",
            category: ['Безопасность'],
          },
          {
              key: '5',
              name: 'Росссети',
              author: 'Дарья Сергеевна Золоторева',
              raiting : "0",
              messages : "0",
              category: ['Digital'],
            },
            {
                key: '6',
                name: 'Расширение транспортной сети',
                author: 'Дарья Сергеевна Золоторева',
                raiting : "0",
                messages : "0",
                category: ['Другое'],
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
                                <Select size={"middle"} defaultValue="Новые" style={{ width: 150 }}>
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