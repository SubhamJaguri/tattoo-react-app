import React from 'react';
import { Col, Row } from 'antd'


//components Imports
import ClientPersonalCard from '../../components/ClientProfile/personaldetail'
import ClientSalesCard from '../../components/ClientProfile/sales';
import ClientBookingCard from '../../components/ClientProfile/booking';

function ClientProfilePage() {
    return (
        <Row gutter={20}>
            <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                <ClientPersonalCard/>
            </Col>
            <Col xxl={16} xl={16} lg={16} md={12} sm={24} xs={24}>
                <ClientSalesCard/>
                <ClientBookingCard/>
            </Col>
        </Row>
    )
}

export default ClientProfilePage
