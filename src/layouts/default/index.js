import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames/bind';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

// Component
import FooterComponent from 'src/components/shared/footer';
import HeaderComponent from 'src/components/shared/header';
import BannerSearch from 'src/components/private/bannerSearch';
import ProtectedRoute from 'src/components/shared/protectedRoute';

// Other
import menuItems from 'src/routers';
import { UserRoles } from 'src/utils/enum';
import styles from './defaultLayout.module.scss';
import { AUTH_SCREEN_PATH, routes } from 'src/utils/constants';

const cx = classNames.bind(styles);

const DefaultLayout = () => {
  const location = useLocation();
  const authScreenPath = location.pathname.includes(AUTH_SCREEN_PATH);

  return (
    <div id='defaultLayout' className={cx('defaultLayout')}>
      <HeaderComponent />
      <Layout className={cx('wrapper')}>
        <div className={cx('mainContent')}>
          {!authScreenPath && <BannerSearch />}
          <Switch>
            {menuItems.map((page) => {
              return page.isPrivate ? (
                <ProtectedRoute
                  roles={UserRoles.STUDENT}
                  exact={page.exact}
                  path={page.layout + page.path}
                  key={page.path}
                >
                  {page.component}
                </ProtectedRoute>
              ) : (
                <Route exact={page.exact} path={page.layout + page.path} key={page.path}>
                  {page.component}
                </Route>
              );
            })}

            <Redirect to='/' />
          </Switch>
        </div>
      </Layout>
      <FooterComponent />
    </div>
  );
};

export default DefaultLayout;
