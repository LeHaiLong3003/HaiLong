import React from 'react';
import classNames from 'classnames/bind';

import styles from './signIn.module.scss';
import { Button, Col, Form, Input, Row } from 'antd';

const cx = classNames.bind(styles);

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div id='signInPage' className={cx('signInPage')}>
      <Row gutter={16} justify='space-between' align='middle'>
        <Col className='gutter-row flex' span={12}>
          <Form
            name='login'
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            className={cx('login')}
          >
            <Form.Item>
              <h2>Đăng nhập</h2>
            </Form.Item>

            <Form.Item
              label='Tài khoản'
              name='username'
              className={cx('email')}
              rules={[{ required: true, message: 'Vui lòng nhập tài khoản của bạn!' }]}
            >
              <Input size='large' placeholder='tài khoản' />
            </Form.Item>
            <Form.Item
              label='Mật khẩu'
              name='password'
              className={cx('password')}
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
            >
              <Input size='large' type='password' placeholder='Mật khẩu' />
            </Form.Item>
            <Form.Item>
              <Button size='large' type='primary'>
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col className='gutter-row' span={12}>
          <div className={cx('sign-up')}>
            <h2>Hello, Friend!</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Button type='default' size='large'>
              Đăng kí
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
