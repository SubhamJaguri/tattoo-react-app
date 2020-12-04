import React from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';

import styles from './index.module.css';
//Icons Import
import {  HomeIcon,CalendarIcon,ClientIcon } from '../../../assets/svg/Icons';

const { Sider } = Layout;

function CustomSidebar() {
    return (
    <Sider className={styles.sider} theme="light" breakpoint="lg" collapsedWidth="0" width={256}>
        <div className={styles.logo}/>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeIcon/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarIcon />}>
                <Link to="/calendar">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ClientIcon />}>
                <Link to="/clients">Clients</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<HomeIcon/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CalendarIcon />}>
                <Link to="/calendar">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<ClientIcon />}>
                <Link to="/clients">Clients</Link>
            </Menu.Item>
        </Menu>
    </Sider>  
    )
}

export default CustomSidebar
