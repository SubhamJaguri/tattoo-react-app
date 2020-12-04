import React, { useState } from 'react';

import {
    Card,
    Col,
    Row,
    Form,
    Input,
    Select,
    Button,
    DatePicker,
    Divider,
} from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import styles from './create.module.css';

const { Option } = Select;

function CreateClientPage() {
    const [profession, setProfession] = useState('');
    const [professionList, setProfessionList] = useState([
        'Employee',
        'Self-employed',
        'Student',
        'Home maker',
    ]);

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onNameChange = event => {
        setProfession(event.target.value);
    };

    const addItem = () => {
        setProfessionList([...professionList, profession]);
        setProfession('');
    };

    return (
        <>
            <Form layout='vertical' name='basic' onFinish={onFinish}>
                <Row gutter={30}>
                    <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                        <Card
                            title='Client Personal Info'
                            bordered={true}
                            className={styles.card}
                        >
                            <Row gutter={20}>
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        label='Full Name'
                                        name='name'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input size='large' />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        label='Email Address'
                                        name='email'
                                        rules={[
                                            {
                                                required: true,
                                                type: 'email',
                                                message:
                                                    'Please input your valid email!',
                                            },
                                        ]}
                                    >
                                        <Input size='large' />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        label='Phone Number'
                                        name='number'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your phone number!',
                                            },
                                        ]}
                                    >
                                        <Input size='large' />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        label='Date of birth'
                                        name='day'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your Birth Day!',
                                            },
                                        ]}
                                    >
                                        <DatePicker size='large' bordered />
                                    </Form.Item>
                                </Col>

                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        name='gender'
                                        label='Gender'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your gender!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            size='large'
                                            placeholder='Select gender'
                                        >
                                            <Option value='male'>male</Option>
                                            <Option value='female'>
                                                female
                                            </Option>
                                            <Option value='other'>other</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        name='notifications'
                                        label='Send Notification By'
                                    >
                                        <Select
                                            size='large'
                                            mode='multiple'
                                            placeholder='Notification methods'
                                        >
                                            <Option key='email'>Email</Option>
                                            <Option key='sms'>SMS</Option>
                                            <Option key='whatsapp'>
                                                Whatsapp
                                            </Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                        <Card
                            title='Client Address'
                            bordered={true}
                            className={styles.card}
                        >
                            <Row gutter={24}>
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        label='Location'
                                        name='location'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your location!',
                                            },
                                        ]}
                                    >
                                        <Input size='large' />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xxl={12}
                                    xl={12}
                                    lg={12}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        label='PIN Code'
                                        name='pincode'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your pin code!',
                                            },
                                        ]}
                                    >
                                        <Input size='large' />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xxl={24}
                                    xl={24}
                                    lg={24}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        name='profession'
                                        label='Client Profession'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your profession!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            size='large'
                                            placeholder='custom dropdown render'
                                            dropdownRender={menu => (
                                                <div>
                                                    {menu}
                                                    <Divider
                                                        style={{
                                                            margin: '4px 0',
                                                        }}
                                                    />
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexWrap: 'nowrap',
                                                            padding: 8,
                                                        }}
                                                    >
                                                        <Input
                                                            style={{
                                                                flex: 'auto',
                                                            }}
                                                            value={profession}
                                                            onChange={
                                                                onNameChange
                                                            }
                                                        />
                                                        <a
                                                            href='/#'
                                                            style={{
                                                                flex: 'none',
                                                                padding: '8px',
                                                                display:
                                                                    'block',
                                                                cursor:
                                                                    'pointer',
                                                            }}
                                                            onClick={addItem}
                                                        >
                                                            <PlusOutlined /> Add
                                                            Other Profession
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        >
                                            {professionList.map(item => (
                                                <Option key={item} value={item}>
                                                    {item}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col
                                    xxl={24}
                                    xl={24}
                                    lg={24}
                                    md={24}
                                    sm={24}
                                    xs={24}
                                >
                                    <Form.Item
                                        name='hear'
                                        label='Where did you hear about us?'
                                    >
                                        <Select
                                            size='large'
                                            placeholder='custom dropdown render'
                                            dropdownRender={menu => (
                                                <div>
                                                    {menu}
                                                    <Divider
                                                        style={{
                                                            margin: '4px 0',
                                                        }}
                                                    />
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexWrap: 'nowrap',
                                                            padding: 8,
                                                        }}
                                                    >
                                                        <Input
                                                            style={{
                                                                flex: 'auto',
                                                            }}
                                                            value={profession}
                                                            onChange={
                                                                onNameChange
                                                            }
                                                        />
                                                        <a
                                                            href='/#'
                                                            style={{
                                                                flex: 'none',
                                                                padding: '8px',
                                                                display:
                                                                    'block',
                                                                cursor:
                                                                    'pointer',
                                                            }}
                                                            onClick={addItem}
                                                        >
                                                            <PlusOutlined /> Add
                                                            Other Profession
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        >
                                            {professionList.map(item => (
                                                <Option key={item} value={item}>
                                                    {item}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row type='flex' justify='space-between' gutter={[100, 100]}>
                    <div></div>
                    <div style={{ marginTop: 50 }}>
                        <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                            <Button
                                type='primary'
                                size='large'
                                htmlType='submit'
                            >
                                Save Profile
                            </Button>
                        </Col>
                    </div>
                </Row>
            </Form>
        </>
    );
}

export default CreateClientPage;
