import React from 'react';
import { Row, Col } from 'antd';

import RecentSales from '../../components/Dashboard/recentsales';

function DashboardPage() {
    return (
        <>
            <Row gutter={24}>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <RecentSales />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}></Col>
            </Row>
        </>
    );
}

export default DashboardPage;
