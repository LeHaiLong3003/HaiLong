import React from 'react';
import { Button, Layout, Result } from 'antd';
import classNames from 'classnames/bind';

import styles from './notFound.module.scss';

const cx = classNames.bind(styles);

const NotFoundPage = () => {
  return (
    <Layout className={cx('main_layout')}>
      <div className={cx('main_content')}>
        <Result
          status='404'
          title='404'
          subTitle='Sorry, the page you visited does not exist.'
          extra={<Button type='primary'>Back Home</Button>}
        />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
