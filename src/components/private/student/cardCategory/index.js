import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Card, Skeleton } from 'antd';

import styles from './cardCategory.module.scss';

const { Meta } = Card;
const cx = classNames.bind(styles);

const CardCategory = (props) => {
  const { imageUrl, name } = props;
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1600);

  return (
    <div id='cardCategory' className={cx('cardCategory')}>
      <Card
        className={cx('categoryMainCard')}
        style={{ width: 240 }}
        cover={
          isLoading ? (
            <Skeleton.Image active className={cx('skeletonImage')} />
          ) : (
            <img alt='example' src={imageUrl} className={cx('cardImageCover')} />
          )
        }
      >
        <Skeleton active loading={isLoading} paragraph={{ rows: 0 }} title={{ width: '100%' }}>
          <Meta title={name} />
        </Skeleton>
      </Card>
    </div>
  );
};

export default CardCategory;
