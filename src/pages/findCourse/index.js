import React from 'react';
import classNames from 'classnames/bind';
import { Col, Row } from 'antd';

import CardCategory from 'src/components/private/cardCategory';

import styles from './findCourse.module.scss';
import { categories } from 'src/utils/mockData';

const cx = classNames.bind(styles);

const FindCoursePage = () => {
  return (
    <div id='findCoursePage' className={cx('findCoursePage')}>
      <div className={cx('categoriesSection')}>
        <h1 className={cx('title')}>Danh mục</h1>

        <Row gutter={[20, 20]} className={cx('categoryListCard')}>
          {categories.map((category, index) => (
            <Col span={4} key={index}>
              <CardCategory {...category} />
            </Col>
          ))}
        </Row>
      </div>

      <div className={cx('coursesSection')}>
        <h1 className={cx('title', 'courseTitle')}>Danh sách khóa học</h1>
        <p className={cx('courseSubTitle')}>
          Các khoá học thực chiến, lộ trình bài bản <br /> cung cấp kiến thức và kỹ năng đáp ứng nhu cầu của thị trường
        </p>
      </div>
    </div>
  );
};

export default FindCoursePage;
