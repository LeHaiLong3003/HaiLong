import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './signIn.module.scss';
import { Button, Col, Form, Input, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { routes } from 'src/utils/constants';

const cx = classNames.bind(styles);

const SignIn = () => {
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(false);
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleClickBtnSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div id='signInPage' className={cx('sign-in__contaniner')}>
      <Row gutter={16} justify='space-between' align='middle'>
        <Col className={cx(isSignUp ? '' : 'content__sign-in')} span={12}>
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

        <Col className={cx('content__sign-up ' + (isSignUp ? 'background-color' : ''))} span={12}>
          {!isSignUp ? (
            <div className={cx('sign-up')}>
              <h2>Hello, Friend!</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <Button type='default' size='large' onClick={handleClickBtnSignUp}>
                Đăng kí
              </Button>
            </div>
          ) : (
            <div className={cx('select-type__sign-up')}>
              <h2>Who are you?</h2>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <Button
                  type='default'
                  size='large'
                  style={{ marginRight: '24px' }}
                  onClick={() => {
                    history.push(routes.SIGN_UP_STUDENT);
                  }}
                >
                  Học sinh
                </Button>
                <Button
                  type='default'
                  size='large'
                  style={{ marginRight: '24px' }}
                  onClick={() => {
                    history.push(routes.SIGN_UP_TEACHER);
                  }}
                >
                  Giáo viên
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
