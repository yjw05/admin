import React, { Component } from 'react';
import { Layout, Dropdown, Menu, Icon } from 'antd';
import styles from './index.css'
const { Header, Content, Footer } = Layout;
const { Item } = Menu;
const menu = (
	<Menu>
		<Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
		</Item>
		<Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
		</Item>
		<Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
		</Item>
	</Menu>
);

class UserLayout extends Component {


	render() {
		return (
			<Layout style={{ height: '100vh' }} >
				<Header style={{ background: '#fff', padding: 0 }}>
					<Dropdown overlay={menu} className={styles.international}>
						<span className={styles.iconWrapper}>
							<Icon type="global" />
						</span>
					</Dropdown>
				</Header>
				<Content style={{ padding: '0 50px', marginTop: 64 }}>
					{this.props.children}
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
    			</Footer>
			</Layout>
		);
	}
}

export default UserLayout;
