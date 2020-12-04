import React, { useEffect, useState } from 'react';
import { Col, Row, Table,Input, Button,Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {PlusOutlined} from '@ant-design/icons';


const { Search } = Input;

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        width: 72,
        fixed: 'left',
        render: text => <Avatar style={{ marginLeft: 8 }} >G</Avatar>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <Link to="/clients/text">{text}</Link>,
    },
    {
      title: 'Mobile No.',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      phone: 32,
      email: 'New York No. 1 Lake Park',
      gender:'Male'
    },
    {
      key: '2',
      name: 'Jim Green',
      phone: 42,
      email: 'London No. 1 Lake Park',
      gender:'Female'
    },
    {
      key: '3',
      name: 'Joe Black',
      phone: 32,
      email: 'Sidney No. 1 Lake Park',
      gender:'Female'
    },
    {
        key: '4',
        name: 'John Brown',
        phone: 32,
        email: 'New York No. 1 Lake Park',
        gender:'Male'
      },
      {
        key: '5',
        name: 'Jim Green',
        phone: 42,
        email: 'London No. 1 Lake Park',
        gender:'Female'
      },
      {
        key: '6',
        name: 'Joe Black',
        phone: 32,
        email: 'Sidney No. 1 Lake Park',
        gender:'Female'
      },
      {
        key: '7',
        name: 'John Brown',
        phone: 32,
        email: 'New York No. 1 Lake Park',
        gender:'Male'
      },
      {
        key: '8',
        name: 'Jim Green',
        phone: 42,
        email: 'London No. 1 Lake Park',
        gender:'Female'
      },
      {
        key: '9',
        name: 'Joe Black',
        phone: 32,
        email: 'Sidney No. 1 Lake Park',
        gender:'Female'
      },
      {
          key: '10',
          name: 'John Brown',
          phone: 32,
          email: 'New York No. 1 Lake Park',
          gender:'Male'
        },
        {
          key: '11',
          name: 'Jim Green',
          phone: 42,
          email: 'London No. 1 Lake Park',
          gender:'Female'
        },
        {
          key: '12',
          name: 'Joe Black',
          phone: 32,
          email: 'Sidney No. 1 Lake Park',
          gender:'Female'
        },
  ];

function UserTable() {
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        },5000);
    },[]);  

    return (
        <>
            <Row type="flex" justify="space-between" gutter={[50,50]}>
                <Col xl={8} lg={8} md={18} sm={24} xs={24}>
                    <Search placeholder="Search by name" size="large" enterButton />
                </Col>
                <div>
                <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                        <Button type="primary" size='large' icon={<PlusOutlined />} href="/clients/create">
                            Add Client
                        </Button>
                </Col>
                </div>
            </Row>
            <Table columns={columns} dataSource={data} bordered loading={loader}/>
        </>
    )
}

export default UserTable
