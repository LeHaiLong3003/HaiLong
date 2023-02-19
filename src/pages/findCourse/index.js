import React from 'react';
import classNames from 'classnames/bind';
import { Col, Pagination, Row } from 'antd';

import CardCategory from 'src/components/private/student/cardCategory';
import CardCourse from 'src/components/private/student/cardCourse';

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
            <Col span={6} key={index}>
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

        <Row gutter={[20, 20]} className={cx('courseListCard')}>
          <Col span={8} key={1}>
            <CardCourse />
          </Col>
          <Col span={8} key={1}>
            <CardCourse />
          </Col>
          <Col span={8} key={1}>
            <CardCourse />
          </Col>
          <Col span={8} key={1}>
            <CardCourse />
          </Col>
          <Col span={8} key={1}>
            <CardCourse />
          </Col>
        </Row>

        <Row justify={'center'} className={cx('paginationWrap')}>
          <Pagination defaultCurrent={1} pageSize={10} total={34} />
        </Row>
      </div>
    </div>
  );
};

export default FindCoursePage;
