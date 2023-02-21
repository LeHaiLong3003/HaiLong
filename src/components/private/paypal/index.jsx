import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

import { StorageConstants } from 'src/utils/constants';

const PaypalCheckoutButton = (props) => {
  const { amount, onSubmitPaypal, params } = props;

  const handleCreateOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: amount,
              currency_code: 'USD',
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((order) => {
      onSubmitPaypal(order);
      localStorage.setItem(StorageConstants.TRANSACTION, order.id);
    });
  };

  const handleClick = (data, actions) => {
    if (!+amount) {
      alert('Information is missing, please fill it before processing the payment');
      return actions.reject();
    }
    return actions.resolve();
  };

  const handleError = (data, actions) => {
    alert('Unable to process your payment, please try again later');
  };

  return (
    <PayPalButtons
      style={{
        color: 'gold',
        layout: 'horizontal',
        height: 42,
        tagline: false,
        shape: 'pill',
        label: 'pay',
      }}
      onClick={handleClick}
      createOrder={handleCreateOrder}
      forceReRender={[amount, params]}
      onApprove={handleApprove}
      onCancel={() => {}}
      onError={handleError}
    />
  );
};

export default PaypalCheckoutButton;
