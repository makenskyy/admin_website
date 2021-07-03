
import './customers.css';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { userRows } from '../../data/data';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { deleteCustomerAction } from '../../store/authReducer';

export default function Customers() {


  const dispatch = useDispatch();
  const customers = useSelector(state => state.authReducer.customers);
  const orders = useSelector(state => state.authReducer.orders);

  const [data, setData] = useState(customers);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));

    const orders_id = customers.filter(customer => customer.id === id)[0].orders_id;
    const updatedOrders = orders.filter(order => !orders_id.includes(order.id));
    const updatedCustomers = customers.filter(customer => customer.id !== id);

    dispatch(deleteCustomerAction({ updatedCustomers, updatedOrders }));
  }






  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 140 },
    { field: 'firstName', headerName: 'First name', width: 140 },
    { field: 'lastName', headerName: 'Last name', width: 140 },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'orders', headerName: "Orders", width: 140, renderCell: (params) => {
        return (
          <>
            <Link className='orderLink' to={`/customer/${params.data.id}/orders`} >
              <button className="orderLinkButton">view orders</button>
            </Link>
          </>
        )
      }
    },
    {
      field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        return (
          <>
            <Link to={`/customer/${params.data.id}`} >
              <button className="customersEdit">Edit</button>
            </Link >
            <DeleteOutline className="customersDelete" onClick={() => handleDelete(params.data.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className="customers">
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}



