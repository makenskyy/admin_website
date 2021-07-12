import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import styles from './orderDetails.module.scss';
// import './orderDetails.css';

import { customers, orders } from '../../data/data';

import { useHistory } from 'react-router';



export const OrderDetails: React.FC = () => {

  const useParamsInt = () => {
    const { id } = useParams<ParamTypes>();
    return parseInt(id);
  }
  const id = useParamsInt();



  const history = useHistory();

  const order = orders.filter(item => item.id === id)[0];
  // тут крч после филтера array там нужно было выбрать [0] индекс, потому что там было тот обджект который мне нужен был , а на первом индексе какой-то прототиппа сондай болды
  const customer_id = order.customer_id;
  const customer = customers.filter(customer => customer.id === customer_id)[0];
  // тут тоже так же

  return (
    <div className={styles.order}>
      <h2 className={styles.orderTitle}>{id} ID order in detail</h2>
      <div className={styles.container}>
        <div className={styles.orderSummary}>
          <div className={styles.showTitle}>
            <h1>Order summary</h1>
            <div className={styles.showTitleConfirmed}>Confirmed</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemLeft}>Order created</div>
            <div className={styles.summaryItemRight}>{order.date}</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemLeft}>Item price</div>
            <div className={styles.summaryItemRight}>{order.total}</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemLeft}>Shipping price</div>
            <div className={styles.summaryItemRight}>$1.00</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemLeft}>Payment fee</div>
            <div className={styles.summaryItemRight}>$2.00</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemLeft}>Discount</div>
            <div className={styles.summaryItemRight}>-$5.70</div>
          </div>
          <div className={styles.total}>
            <div className={styles.summaryItemLeftTotal}>Total</div>
            <div className={styles.summaryItemRight}>${(order.total + 1 + 2 - 5.7).toFixed(2)}</div>
          </div>
        </div>
        <div className={styles.orderDetails}>
          <div className={styles.orderDetailsContainer}>
            <div className={styles.showTitle}>
              <h1>Order details</h1>
            </div>
            <div className={styles.orderDetailsItem}>
              <div className={styles.orderDetailsItemLeft}>Customer</div>
              <div className={styles.orderDetailsItemRight}>{customer.firstName} {customer.lastName}</div>
            </div>
            <div className={styles.orderDetailsItem}>
              <div className={styles.orderDetailsItemLeft}>Product name</div>
              <div className={styles.orderDetailsItemRight}>{order.productName}</div>
            </div>
            <div className={styles.orderDetailsItem}>
              <div className={styles.orderDetailsItemLeft}>Address</div>
              <div className={styles.orderDetailsItemRight}>{order.shippingAddress}</div>
            </div>
            <div className={styles.orderDetailsItem}>
              <div className={styles.orderDetailsItemLeft}>Payment method</div>
              <div className={styles.orderDetailsItemRight}>{order.paymentMethod}</div>
            </div>
          </div>
          <div className={styles.backHistory} >
            <button className={styles.backHistoryButton} onClick={() => history.push('/orders')}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}


interface ParamTypes {
  id: string
}

export default OrderDetails;