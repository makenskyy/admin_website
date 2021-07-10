
import './orders.css';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { orderDeleteAction } from '../../store/authReducer';
import { useTypedSelector } from '../../store/useTypesSelector';



const Orders = () => {

  const orders = useTypedSelector(state => state.authReducer.orders);
  const customers = useTypedSelector(state => state.authReducer.customers);

  const [data, setData] = useState(orders);
  const dispatch = useDispatch();


  const handleDelete = (id: number, customer_id: number) => {
    setData(data.filter(item => item.id !== id));

    const sortedOrders = orders.filter(order => order.id !== id);
    const customer = customers.filter(customer => customer.id === customer_id)[0];
    const orders_id = customer.orders_id.filter((item_id: number) => item_id !== id);
    const updatedCustomer = { ...customer, orders_id: orders_id };
    const updatedCustomers = customers.map(customer => {
      if (customer.id === customer_id) {
        return updatedCustomer;
      } else return customer;
    })


    dispatch(orderDeleteAction({ sortedOrders, updatedCustomers }));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'date', headerName: 'Date', width: 160 },
    {
      field: 'total', headerName: 'Total sum', width: 160,
    },
    { field: 'delivered', headerName: "delivered", width: 140 },
    { field: "paymentMethod", headerName: "Payment method", width: 140 },
    { field: "shippingAddress", headerName: "Shipping address", width: 140 },
    {
      field: 'orders', headerName: "Orders", width: 140, renderCell: (params: any) => {
        return (
          <>
            <Link className='orderLink' to={`/orders/${params.data.id}`} >
              <button className="orderLinkButton">order summary</button>
            </Link>
          </>
        )
      }
    },
    {
      field: "action", headerName: "Action", width: 90, renderCell: (params: any) => {
        return (
          <>
            {/* <Link to={`/customer/${params.data.id}`} >
              <button className="customersEdit">Edit</button>
            </Link > */

              /* Крч сначала я просто-так написал, но если-что закомментил может понадобится, но по-моему это будет нелогично добавить edit button для orders для админа так как этот функционал вообще не нужен */

            }
            <DeleteOutline className="customersDelete" onClick={() => handleDelete(params.data.id, params.data.customer_id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className="orders">
      <div className="titleContainer">
        <h1 className="title">Orders</h1>
      </div>
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}



export default Orders;