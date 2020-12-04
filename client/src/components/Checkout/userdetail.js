import React from 'react';
import { Avatar, Card, Col, Row,Typography } from 'antd';

import styles from './detail.module.css';


const { Title,Text } = Typography;

function CheckoutUserDetail() {
    return (
        <Card className={styles.card}>
            <Row gutter={20}>
                <Col xxl={6} xl={6} lg={12} md={24} sm={24} xs={24}>
                    <Avatar size={100} style={{backgroundColor:'#6881E5'}}>G</Avatar>
                </Col>
                <Col xxl={18} xl={18} lg={12} sm={24} xs={24}>
                    <Title level={4}>James Matthew Barrie</Title>
                    <Text strong>+91-7814309133</Text><br/>
                    <Text strong>bipulpoudeldev@gmail.com</Text>
                </Col>
            </Row>
        </Card>
    )
}

export default CheckoutUserDetail
