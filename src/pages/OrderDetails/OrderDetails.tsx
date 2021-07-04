import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import './orderDetails.css';

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
    <div className="order">
      <h2 className="orderTitle">{id} ID order in detail</h2>
      <div className="container">
        <div className="orderSummary">
          <div className="showTitle">
            <div className="showTitleText">Order summary</div>
            <div className="showTitleConfirmed">Confirmed</div>
          </div>
          <div className="summaryItem">
            <div className="summaryItemLeft">Order created</div>
            <div className="summaryItemRight">{order.date}</div>
          </div>
          <div className="summaryItem">
            <div className="summaryItemLeft">Item price</div>
            <div className="summaryItemRight">{order.total}</div>
          </div>
          <div className="summaryItem">
            <div className="summaryItemLeft">Shipping price</div>
            <div className="summaryItemRight">$1.00</div>
          </div>
          <div className="summaryItem">
            <div className="summaryItemLeft">Payment fee</div>
            <div className="summaryItemRight">$2.00</div>
          </div>
          <div className="summaryItem">
            <div className="summaryItemLeft">Discount</div>
            <div className="summaryItemRight">-$5.70</div>
          </div>
          <div className="summaryItem total">
            <div className="summaryItemLeftTotal">Total</div>
            <div className="summaryItemRight">${(order.total + 1 + 2 - 5.7).toFixed(2)}</div>
          </div>

        </div>
        <div className="orderDetails">
          <div className="orderDetailsContainer">
            <div className="showTitle">
              <div className="showTitleText">Order details</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Customer</div>
              <div className="orderDetailsItemRight">{customer.firstName} {customer.lastName}</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Product name</div>
              <div className="orderDetailsItemRight">{order.productName}</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Shipping address</div>
              <div className="orderDetailsItemRight">{order.shippingAddress}</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Payment method</div>
              <div className="orderDetailsItemRight">{order.paymentMethod}</div>
            </div>
          </div>
          <div className="backHistory" >
            <button className="backHistoryButton" onClick={() => history.push('/orders')}>OK</button>
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