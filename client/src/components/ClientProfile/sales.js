import React from 'react';
import { Card,Col,Row,Typography } from 'antd';

import styles from './sales.module.css';

const { Title,Text } = Typography;

function ClientSalesCard() {
    return (
        <Card bordered className={styles.card}>
            <Row gutter={40}>
                <Col  xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className={styles.colStyle}>
                    <Title level={3}>₹ 2000.00</Title>
                    <Text>Total Sales</Text>
                </Col>
                <Col  xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} className={styles.colStyle}>
                    <Title level={3}>₹ 2000.00</Title>
                    <Text>Outstanding</Text>
                </Col>
                <Col  xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} className={styles.colStyle}>
                    <Title level={5}>01</Title>
                    <Text type="secondary">All bookings</Text>
                </Col>
                <Col  xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} className={styles.colStyle}>
                    <Title level={5}>01</Title>
                    <Text type="secondary">Completed</Text>
                </Col>
                <Col  xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} className={styles.colStyle}>
                    <Title level={5}>01</Title>
                    <Text type="secondary">Cancelled</Text>
                </Col>
                <Col  xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} className={styles.colStyle}>
                    <Title level={5}>01</Title>
                    <Text type="secondary">No Show</Text>
                </Col>
            </Row>

        </Card>
    )
}

export default ClientSalesCard
