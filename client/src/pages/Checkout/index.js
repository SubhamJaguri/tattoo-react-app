import React from 'react';

import { Col, Row } from 'antd';

//components Import
import CheckoutDetails from '../../components/Checkout/detail';
import CheckoutUserDetail from '../../components/Checkout/userdetail';

function CheckOutPage() {
    return (
        <Row gutter={24}>
            <Col xs={24} sm={24} md={12} lg={16} xl={16} xxl={16}>
                <CheckoutDetails/>
            </Col>
            <Col  xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                <CheckoutUserDetail/>
            </Col>
        </Row>
    )
}

export default CheckOutPage
