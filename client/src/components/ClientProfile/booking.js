import React from 'react';

import { Tabs,Card } from 'antd';

//import css
import styles from './booking.module.css';

const { TabPane } = Tabs;

function ClientBookingCard() {
    return (
        <Card className={styles.card}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Appointment" key="1">
                Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Products" key="2">
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Invoice" key="3">
                Content of Tab Pane 3
                </TabPane>
            </Tabs>  
        </Card>
    )
}

export default ClientBookingCard
