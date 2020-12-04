import React from 'react'
import { Layout } from 'antd';
import styles from './index.module.css';

//components
import CustomHeader from '../components/CustomHeader';

const { Content } = Layout;

function FullHeaderLayout({children}) {
    return (
        <>
        <Layout>
            <Layout className={styles.siteLayout}>
                <CustomHeader fullHeader={true}/>
                <Content className={styles.content}>
                    {children}
                </Content>
            </Layout>
        </Layout>
        </>
    )
}

export default FullHeaderLayout