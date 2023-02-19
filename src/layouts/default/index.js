import { Layout, theme } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';
import { Redirect, Route, Switch } from 'react-router-dom';

// Component
import FooterComponent from 'src/components/shared/footer';
import HeaderComponent from 'src/components/shared/header';

// Other
import menuItems from 'src/routers';
import styles from './defaultLayout.module.scss';
import BannerSearch from 'src/components/private/bannerSearch';

const cx = classNames.bind(styles);

const DefaultLayout = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <div id='defaultLayout' className={cx('defaultLayout')}>
      <HeaderComponent />
      <Layout className={cx('wrapper')}>
        <div className={cx('mainContent')}>
          <BannerSearch />
          <Switch>
            {menuItems.map((page) => (
              <Route exact={page.exact} path={page.path} key={page.path}>
                {page.component}
              </Route>
            ))}

            <Redirect to='/' />
          </Switch>
        </div>
      </Layout>
      <FooterComponent />
    </div>
  );
};

export default DefaultLayout;
