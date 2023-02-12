import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames/bind';

import styles from './banner.module.scss';

const { Search } = Input;
const cx = classNames.bind(styles);

const BannerSearch = () => {
  return (
    <div id='bannerSearch' className={cx('bannerSearch')}>
      <h2 className={cx('bannerTitle')}>Tìm Kiếm Khóa Học Yêu Thích của bạn</h2>
      <h3 className={cx('bannerSubTitle')}>Tìm kiếm, học hỏi và nâng cao kiến thức</h3>

      <div className={cx('bannerSearchWrap')}>
        <Search placeholder='Tìm Kiếm...' size='large' className={cx('bannerInputSearch')} />
      </div>
    </div>
  );
};

export default BannerSearch;
