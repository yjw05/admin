import { connect } from 'dva';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import styles from './index.css';
const { Header } = Layout;
const { Item } = Menu;

const GlobalHeader = props => {
  const { collapsed, toggle } = props;

  const portal = (
    <Menu>
      <Item>系统管理</Item>
      <Item>告警系统</Item>
    </Menu>
  );

  const internation = (
    <Menu>
      <Item>中文</Item>
      <Item>English</Item>
    </Menu>
  );

  const user = (
    <Menu>
      <Item onClick={props.logout}>
        <Icon type="logout" />
        退出登录
      </Item>
    </Menu>
  );

  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className={styles.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />

      <Dropdown overlay={portal} className={styles.portal}>
        <span className={styles.iconWrapper}>
          <Icon type="appstore" theme="twoTone" />
        </span>
      </Dropdown>

      <Dropdown overlay={internation} className={styles.international}>
        <span className={styles.iconWrapper}>
          <Icon type="global" />
        </span>
      </Dropdown>

      <Dropdown overlay={user} className={styles.userAction}>
        <span className={styles.iconWrapper}>
          <Icon type="smile" theme="twoTone" />
          Admin
        </span>
      </Dropdown>

      <Icon type="search" />
    </Header>
  );
};

const mapState = state => ({
  collapsed: state.ui.collapsed,
});

const mapDispatch = dispatch => ({
  toggle() {
    dispatch({
      type: 'ui/changeCollapse',
    });
  },
  logout() {
    dispatch({
      type: 'login/logout',
    });
  },
});

export default connect(
  mapState,
  mapDispatch
)(GlobalHeader);
