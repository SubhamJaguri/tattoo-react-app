import React from 'react';

import { Col, Row, Select, Typography,Input,Form, Radio } from 'antd';



const { Title,Text } = Typography;
const { Option } = Select;
const {TextArea} = Input;

function SingleProductCheckout() {
    return (
        <>
            <Title level={5}>1. Tatto Removal</Title>
            <Text type="secondary">30 mins with Ramesh</Text>
                <Form
                    layout="vertical"
                    name="basic"
                    style={{marginTop:30}}
                >
                    <Row gutter={30}>
                        <Col xxl={2} xl={2} lg={2} md={12} sm={24} xs={24}>
                            <Form.Item label="Qty">
                                <Input size="large"/>
                            </Form.Item>
                        </Col>

                        <Col xxl={4} xl={4} lg={4} md={12} sm={24} xs={24}>
                            <Form.Item label="Price">
                                <Input size="large" prefix="₹" suffix="INR"/>
                            </Form.Item>
                        </Col>
                        
                        <Col xxl={9} xl={9} lg={9} md={12} sm={24} xs={24}>
                            <Form.Item name="gender" label="Gender">
                                <Select
                                    size="large"
                                    placeholder="Add discount"
                                    >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xxl={9} xl={9} lg={9} md={12} sm={24} xs={24}>
                            <Form.Item name="gender" label="Gender">
                                <Select
                                    size="large"
                                    placeholder="Select staff"
                                    >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                            <Form.Item label="Price">
                                <Input size="large" prefix="₹" suffix="INR"/>
                            </Form.Item>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                            <Form.Item label="Price">
                                <Input size="large" prefix="₹" suffix="INR"/>
                            </Form.Item>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                            <Form.Item label="Price">
                                <Input size="large" prefix="₹" suffix="INR"/>
                            </Form.Item>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                            <Form.Item label="Price">
                                <Input size="large" prefix="₹" suffix="INR"/>
                            </Form.Item>
                        </Col>

                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <Form.Item name="gender" label="Gender">
                                <Select
                                    size="large"
                                    placeholder="Select staff"
                                    >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                            <Form.Item label="Payment status">
                                <Radio.Group defaultValue="a" buttonStyle="solid" size="large">
                                    <Radio.Button value="a">Paid</Radio.Button>
                                    <Radio.Button value="b">Pending</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Form.Item label="Add a note">
                                <TextArea autoSize={{ minRows: 3 }} />
                            </Form.Item>
                        </Col>
                    </Row>
            </Form>
        </>
    )
}

export default SingleProductCheckout
