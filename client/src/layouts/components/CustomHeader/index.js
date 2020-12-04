import React from 'react';
import { Layout,Typography,Avatar,Popover } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import styles from './index.module.css';

const { Title } = Typography;
const { Header} = Layout;


const text = <span>Account</span>;
const content = (
  <div>
    <p>Log Out</p>
  </div>
);

function CustomHeader({fullHeader=false}) {
    return (
        <>
          <Header className={fullHeader? styles.fullWidth :styles.headerMain}>
                <div><Title level={4}>Home</Title></div>
                <div>
                    <Popover placement="bottomLeft" title={text} content={content} trigger="click">
                        <Avatar size={40} icon={<AntDesignOutlined />}/>
                    </Popover>
                    
                </div>
          </Header>  
        </>
    )
}

export default CustomHeader
