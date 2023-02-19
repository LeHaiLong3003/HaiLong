import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Skeleton, Spin } from 'antd';
import { DollarOutlined, LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';

import personIcon from 'src/assets/icons/ic_person.svg';
import timeIcon from 'src/assets/icons/ic_time.svg';
import calendarIcon from 'src/assets/icons/ic_calendar.svg';
import styles from './cardCourse.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Meta } = Card;
const cx = classNames.bind(styles);

const CardCourse = (props) => {
  const { imageUrl, name } = props;
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1600);

  const BuyButton = (
    <div className={cx('buyAction')} key='price'>
      {isLoading ? (
        <Spin indicator={antIcon} />
      ) : (
        <>
          {' '}
          <DollarOutlined />
          <span>200</span>
        </>
      )}
    </div>
  );

  const DetailButton = (
    <Link to={'/'} className={cx('detailAction')} key='detail'>
      Xem chi tiết
    </Link>
  );

  return (
    <div id='cardCourse' className={cx('cardCourse')}>
      <Card
        className={cx('courseMainCard')}
        style={{ width: 240 }}
        cover={
          isLoading ? (
            <Skeleton.Image active className={cx('skeletonImage')} />
          ) : (
            <img
              alt='example'
              src={imageUrl || 'https://tutors-content.s3.eu-west-1.amazonaws.com/Chit-chat.png'}
              className={cx('cardImageCover')}
            />
          )
        }
        actions={[BuyButton, DetailButton]}
      >
        <Skeleton active loading={isLoading} paragraph={{ rows: 2 }} title={{ width: '100%' }}>
          <Meta title={name || 'Các nguồn tài nguyên hữu ích cho 1 front-end developer'} />

          <div className={cx('contentCourse')}>
            <div className={cx('contentRow')}>
              <img src={calendarIcon} alt='calendarIcon' className={cx('rowImageLabel')} />
              <b>Ngày bắt đầu:</b>
              <span>10/05/2023</span>
            </div>

            <div className={cx('contentRow')}>
              <img src={timeIcon} alt='timeIcon' className={cx('rowImageLabel')} />
              <b>Thời lượng:</b>
              <span>10 buổi</span>
            </div>

            <div className={cx('contentRow')}>
              <img src={personIcon} alt='personIcon' className={cx('rowImageLabel')} />
              <b>Số lượng học viên:</b>
              <span>08/10</span>
            </div>
          </div>
        </Skeleton>
      </Card>
    </div>
  );
};

export default CardCourse;
