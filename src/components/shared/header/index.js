import React from 'react';
import { Button, Col, Layout, Menu, Row } from 'antd';
import classNames from 'classnames/bind';
import { Link, useHistory } from 'react-router-dom';

import menuItems from 'src/routers';
import styles from './header.module.scss';
import Logo from '../../../assets/images/logo.svg';
import { routes } from 'src/utils/constants';

const { Header } = Layout;
const cx = classNames.bind(styles);

const HeaderComponent = () => {
  const history = useHistory();
  return (
    <Header className={cx('headerComponent')}>
      <div className={cx('wrapper')}>
        <Row gutter={16} justify='space-between' align='middle'>
          <Col className='gutter-row' span={4}>
            <img src={Logo} alt='mainLogo' />
          </Col>

          <Col className='gutter-row' span={16}>
            <Menu theme='light' mode='horizontal' defaultSelectedKeys={['0']} className={cx('menuAntd')}>
              {menuItems.map((menu, index) => {
                if (!menu.name) return null;

                return (
                  <Menu.Item key={index} className={cx('menuItemAntd')}>
                    {menu.name}
                    <Link to={menu.path} />
                  </Menu.Item>
                );
              })}
            </Menu>
          </Col>

          <Col className='gutter-row' align='end' span={4}>
            <Button
              type='primary'
              onClick={() => {
                history.push(routes.SIGN_IN);
              }}
            >
              Đăng nhập
            </Button>
          </Col>
        </Row>
      </div>
    </Header>
  );
};

export default HeaderComponent;
