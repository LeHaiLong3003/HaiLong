import React from 'react';
import classNames from 'classnames/bind';

import styles from './findCourse.module.scss';

const cx = classNames.bind(styles);

const FindCoursePage = () => {
  return (
    <div id='findCoursePage' className={cx('findCoursePage')}>
      <div className={cx('categoriesSection')}>
        <h1 className={cx('title')}>Danh mục</h1>
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
