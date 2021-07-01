import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import './orderDetails.css';

import { customers } from '../../data/data';


const OrderDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState({});

  customers.map(customer => {
    const { orders } = customer;
    console.log(orders);
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].id == id) {
        const { firstName, lastName } = customer;
        const { productName, shippingAddress, delivered, paymentMethod, total } = orders[i];

        setData(productName, shippingAddress, delivered, paymentMethod, total, firstName, lastName);
        // из за этой линий у меня не работает код
      }
    }
  })
  console.log(data);

  return (
    <div className="orderDetails">
      <h1>Order details page</h1>
      Current order id is {id}
    </div>
  )
}

export default OrderDetails;