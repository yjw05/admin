import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './LoginForm.css';

class LoginFormComponent extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
        // console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading, loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <div className={styles.loginFormWrapper}>
          <h1 className={styles.LoginLogo}>ADMIN</h1>
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue: 'admin',
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
                initialValue: 'admin',
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}

              <Button
                type="primary"
                loading={loading}
                htmlType="submit"
                className={styles.loginFormButton}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(LoginFormComponent);

const mapState = state => ({
  loading: state.login.loading,
  loginStatus: state.login.loginStatus,
});

const mapDispatch = dispatch => ({
  login(values) {
    dispatch({
      type: 'login/login',
      values,
    });
  },
});

export default connect(
  mapState,
  mapDispatch
)(LoginForm);
