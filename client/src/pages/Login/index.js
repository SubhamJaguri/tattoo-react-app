import React, { useState } from 'react';

import { Button, Row, Input, Form, message, Typography } from 'antd';

import styles from './index.module.css';
import FormItem from 'antd/lib/form/FormItem';
import Background from '../../assets/images/login-page-bg.png';
import { Redirect } from 'react-router-dom';

const { Title } = Typography;

function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleOk = values => {
        setLoading(true);
        setTimeout(() => {
            message.success('Yo! you are verified now.');
            setLoading(false);
            setRedirect(true);
        }, 3000);
    };

    if (redirect) {
        return <Redirect to='/' />;
    }

    return (
        <section>
            <img
                src={Background}
                style={{ height: '100vh', width: '100%' }}
                alt='Login Background'
            />
            <div className={styles.form}>
                <Title level={4}>Login to continue</Title>
                <Form onFinish={handleOk} layout='vertical'>
                    <FormItem
                        name='email'
                        label='Email'
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Please input your valid email!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input size='large' placeholder='Email' />
                    </FormItem>
                    <FormItem
                        name='password'
                        label='Password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your valid password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            size='large'
                            type='password'
                            placeholder='Password'
                        />
                    </FormItem>
                    <Row>
                        <Button
                            type='primary'
                            htmlType='submit'
                            size='large'
                            block
                            loading={loading}
                        >
                            Login
                        </Button>
                    </Row>
                </Form>
            </div>
        </section>
    );
}

export default LoginPage;
