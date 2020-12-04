
import React from 'react';
import { Card,Avatar,Typography, Button } from 'antd'

import styles from './personaldetail.module.css';

const { Title,Text } = Typography;

function ClientPersonalCard() {
    return (
        <>
            <Card className={styles.card} bordered>
                    <Avatar size={{ xs: 30, sm: 40, md: 50, lg: 64, xl: 80, xxl: 100 }} style={{backgroundColor:'#6881E5',marginBottom:20}}>G</Avatar>
                    <Title level={4}>James Matthew Barrie</Title>
                    <Button type="primary" size="large" href="/appointment/create">New Appointment</Button>
            </Card> 
            <Card className={styles.card2} bordered>
                <Text>Full Name</Text>
                <Title level={5}>James Matthew Barrie</Title>
                <Text>Email</Text>
                <Title level={5}>James418@gmail.com</Title>
                <Text>Mobile</Text>
                <Title level={5}>+91- 7814309133</Title>
                <Text>Address</Text>
                <Title level={5}>Siddharthanagar-5,Rupandehi,Nepal</Title>
                <Text>Gender</Text>
                <Title level={5}>Male</Title>
            </Card> 
        </>
    )
}

export default ClientPersonalCard
