import React from 'react';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';
import { Col, Row } from 'antd';

const cx = classNames.bind(styles);

const FooterComponent = () => {
  return (
    <div id='footerComponent' className={cx('footerComponent')}>
      <div className={cx('wrapper')}>
        <Row justify='space-between' align='middle'>
          <Col className='gutter-row' span={6}>
            <span>
              Copyright © 2023 <span>Mr. Son Vu</span> All rights reserved.
            </span>
          </Col>
          <Col className='gutter-row' span={6} align='end'>
            <>
              <a href='/#'>Term &amp; Conditions</a>
              <span> | </span>
              <a href='/#'>Privacy &amp; Policy</a>
            </>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default FooterComponent;
