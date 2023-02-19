import React, { useState } from 'react';
import { Card, Skeleton } from 'antd';
import classNames from 'classnames/bind';

import styles from './cardCourse.module.scss';

const { Meta } = Card;
const cx = classNames.bind(styles);

const CardCourse = (props) => {
  const { imageUrl, name } = props;
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1600);

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
      >
        <Skeleton active loading={isLoading} paragraph={{ rows: 2 }} title={{ width: '100%' }}>
          <Meta title={name || 'FrontEnd ReactJs'} />
          <div>fahjsdgf</div>
          <div>adfshjdfgashjdfbjkhasd</div>
        </Skeleton>
      </Card>
    </div>
  );
};

export default CardCourse;
