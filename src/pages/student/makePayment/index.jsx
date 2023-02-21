import React, { useState } from 'react';
import { Col, Divider, Row, Typography, Checkbox } from 'antd';
import classNames from 'classnames/bind';

import { CURRENCY_LIST } from 'src/utils/constants';
import styles from './makePayment.module.scss';

const { Text } = Typography;
const cx = classNames.bind(styles);

const MakePaymentPage = () => {
  const [currencyList, setCurrencyList] = useState(CURRENCY_LIST);

  const handleSelectedCurrency = (index) => {
    let updateCurrencyList;
    updateCurrencyList = currencyList.map((item) =>
      item.id === index ? { ...item, selected: !item.selected } : { ...item, selected: false }
    );

    setCurrencyList(updateCurrencyList);
  };

  return (
    <div id='makePaymentPage' className={cx('makePaymentPage')}>
      <Row gutter={80}>
        <Col span={12}>
          <div className={cx('selectPriceWrap')}>
            <div className={cx('selectPriceHead')}>
              <div className={cx('priceHeadLabel')}>Giá</div>

              <div className={cx('coinNumberHeadLabel')}>Số Coin</div>
            </div>

            <div className={cx('optionPriceContent')}>
              {currencyList.map((item, idx) => (
                <div
                  className={cx('priceRow', item.selected && 'priceRowActive')}
                  key={idx}
                  onClick={() => handleSelectedCurrency(idx)}
                >
                  <div className={cx('priceField')}>
                    <Checkbox checked={item.selected} />
                    <Text>{`${item.price} USD`}</Text>
                  </div>

                  <Divider type='vertical' style={{ backgroundColor: '#D9D9D9' }} />

                  <div className={cx('coinField')}>
                    <Text>{`${item.coin} Coin`}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>

        <Col span={12}>
          <div className={cx('detailTransactionWrap')}>
            <div className={cx('detailTransactionContent')}>
              <div className={cx('detailTranHead')}>
                <div className={cx('detailTranLabel')}>&#x2022; Chi tiết giao dịch</div>
              </div>
              <Divider style={{ backgroundColor: '#D9D9D9', margin: '16px 0' }} />

              <div className={cx('detailTranMainContent')}>
                <div className={cx('detailTranRow')}>
                  <span className={cx('detailTranRowLabel')}>Giá</span>
                  <span className={cx('detailTranRowValue')}>50 USD</span>
                </div>
                <Divider style={{ backgroundColor: '#D9D9D9', margin: '8px 0' }} />

                <div className={cx('detailTranRow')}>
                  <span className={cx('detailTranRowLabel')}>Số Coin nhận được</span>
                  <span className={cx('detailTranRowValue')}>75 Coin</span>
                </div>
                <Divider style={{ backgroundColor: '#D9D9D9', margin: '8px 0' }} />

                <div className={cx('detailTranRow')}>
                  <span className={cx('detailTranRowLabel')}>Phương thức thanh toán</span>
                  <span className={cx('detailTranRowValue')}>Paypal</span>
                </div>
                <Divider style={{ backgroundColor: '#D9D9D9', margin: '8px 0' }} />
              </div>
            </div>

            <div className={cx('detailTransactionPaypal')}>Paypal Button gone here!!</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MakePaymentPage;