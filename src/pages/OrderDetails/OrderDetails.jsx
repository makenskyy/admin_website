import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import './orderDetails.css';

import { customers } from '../../data/data';

import { useHistory } from 'react-router';

import DetailsIcon from '@material-ui/icons/Details';
import { LocationSearching } from '@material-ui/icons';

import { Link } from 'react-router-dom';


const OrderDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState({});
  let info = {};

  const history = useHistory();


  customers.map(customer => {
    const { orders } = customer;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].id == id) {
        const { firstName, lastName } = customer;
        const { productName, shippingAddress, delivered, paymentMethod, total, date } = orders[i];
        info = { firstName, lastName, productName, shippingAddress, delivered, paymentMethod, total, date };
        // setData({ productName, shippingAddress, delivered, paymentMethod, total, firstName, lastName });
        // из за этой линий у меня не работает код
        // я тут хотел запихнуть {productName, shippingAddress, delivered, paymentMethod, total, firstName, lastName} на data
      }
    }
  })

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
            <div className="summaryItemRight">{info.date}</div>
          </div>
          <div className="summaryItem">
            <div className="summaryItemLeft">Item price</div>
            <div className="summaryItemRight">{info.total}</div>
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
            <div className="summaryItemRight">$197.70</div>
          </div>

        </div>
        <div className="orderDetails">
          <div className="orderDetailsContainer">
            <div className="showTitle">
              <div className="showTitleText">Order details</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Customer</div>
              <div className="orderDetailsItemRight">{info.firstName} {info.lastName}</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Product name</div>
              <div className="orderDetailsItemRight">{info.productName}</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Shipping address</div>
              <div className="orderDetailsItemRight">{info.shippingAddress}</div>
            </div>
            <div className="orderDetailsItem">
              <div className="orderDetailsItemLeft">Payment method</div>
              <div className="orderDetailsItemRight">{info.paymentMethod}</div>
            </div>
          </div>
          <div className="backHistory" >
            <button className="backHistoryButton" onClick={() => history.push('/dashboard')}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails;