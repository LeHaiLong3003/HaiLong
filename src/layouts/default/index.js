import { Layout, theme } from 'antd';
import React from 'react';
import FooterComponent from 'src/components/shared/footer';
import HeaderComponent from 'src/components/shared/header';

const DefaultLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='auth-layout__container'>
      <HeaderComponent />
      <FooterComponent />
    </Layout>
  );
};

export default DefaultLayout;
