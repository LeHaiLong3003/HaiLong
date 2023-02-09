import React from 'react';
import { Button, Layout, Menu } from 'antd';

import { MenuItems } from 'src/utils/enum';
import './header.css';

import Logo from '../../../assets/images/logo.svg';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <div className='header_menu'>
        <div className='header-logo'>
          <img src={Logo} />
        </div>
        <Menu
          theme='dark'
          mode='horizontal'
          items={MenuItems.map((item, index) => {
            return {
              index,
              label: `${item}`,
            };
          })}
        />
        <Button type='primary' className='btn-login'>
          Đăng nhập
        </Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
