import React from 'react'
import { Layout } from 'antd';
import styles from './index.module.css';

//components
import CustomHeader from '../components/CustomHeader';
import CustomSidebar from '../components/CustomSidebar';

const { Content } = Layout;

function AppLayout({children}) {
    return (
        <>
        <Layout>
            <CustomSidebar/>
            <Layout className={styles.siteLayout}>
                <CustomHeader />
                <Content className={styles.content}>
                    {children}
                </Content>
            </Layout>
        </Layout>
        </>
    )
}

export default AppLayout