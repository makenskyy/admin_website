
import './orders.css';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { customers } from '../../data/data';

import { Link } from 'react-router-dom';



export default function Orders() {

  const orderRows = customers.map(customer => customer.orders).flat();

  const [data, setData] = useState(orderRows);



  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'date', headerName: 'Date', width: 160 },
    // { field: 'status', headerName: 'Status', width: 90 },
    {
      field: 'total', headerName: 'Total sum', width: 160,
    },
    { field: 'delivered', headerName: "delivered", width: 140 },
    { field: "paymentMethod", headerName: "Payment method", width: 140 },
    { field: "shippingAddress", headerName: "Shipping address", width: 140 },
    {
      field: 'orders', headerName: "Orders", width: 140, renderCell: (params) => {
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
    <div className="orders">
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}


