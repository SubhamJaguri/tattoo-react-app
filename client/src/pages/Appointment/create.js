import React from 'react'

import {Card, Col, Row,Form, Input, Select, Button} from 'antd';

import styles from './create.module.css';

const { Option } = Select;
const {TextArea} = Input;

function AppointmentCreatePage() {
    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    
    return (
        <>
        <Form layout="vertical" name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={[30,50]}>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <Card title="Appointment Details" bordered={true} className={styles.card}>        
                        <Row gutter={24}>
                            <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                                <Form.Item name="gender" label="Gender"  rules={[{required: true,message: 'Please input your gender!',},]}>
                                    <Select
                                    size="large"
                                    placeholder="Select a option and change input text above"
                                    >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xxl={18} xl={18} lg={18} md={12} sm={24} xs={24}>
                                <Form.Item name="gender" label="Gender"  rules={[{required: true,message: 'Please input your gender!',},]}>
                                    <Select
                                    size="large"
                                    placeholder="Select a option and change input text above"
                                    >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                                <Form.Item name="gender" label="Gender"  rules={[{required: true,message: 'Please input your gender!',},]}>
                                    <Select
                                    size="large"
                                    placeholder="Select a option and change input text above"
                                    >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xxl={18} xl={18} lg={18} md={12} sm={24} xs={24}>
                                <Form.Item name="gender" label="Gender"  rules={[{required: true,message: 'Please input your gender!',},]}>
                                    <Select size="large" placeholder="Select a option and change input text above">
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                                <Form.Item name="gender" label="Gender"  rules={[{required: true,message: 'Please input your gender!',},]}>
                                        <TextArea rows={4} autoSize={{minRows:4}}/>
                                </Form.Item>
                            </Col>
                        </Row>
                </Card>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                <Card title="Client Details" bordered={true} className={styles.card}>
                        <Button type="primary" size='large' htmlType="submit">
                            Save Appointment                           
                        </Button>
                </Card>
            </Col>
        </Row>
        </Form>
    </>
    )
}

export default AppointmentCreatePage
