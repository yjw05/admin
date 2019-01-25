import React, { Component } from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import { Layout, Menu, Icon } from 'antd';

import Header from './Header';

import styles from './index.css';

const { Sider, Content } = Layout;
const { Item } = Menu;

class BasicLayout extends Component {
  render() {
    const { collapsed, loginStatus } = this.props;

    if (loginStatus) {
      return (
        <Layout id={styles.layoutTrigger}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={256}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Item>
              <Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Item>
              <Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Item>
            </Menu>
          </Sider>
          <Layout style={collapsed ? { marginLeft: 80 } : { marginLeft: 256 }}>
            <Header />
            <Content>{this.props.children}</Content>
          </Layout>
        </Layout>
      );
    } else {
      return <Redirect to="/user/login" />;
    }
  }
}

const mapState = state => ({
  collapsed: state.ui.collapsed,
  loginStatus: state.login.loginStatus,
});

export default connect(mapState)(BasicLayout);
