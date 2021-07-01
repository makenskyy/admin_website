
import './orders.css';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { orderRows } from '../../data/data';

import { Link } from 'react-router-dom';


export default function Orders() {
  const [data, setData] = useState(orderRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'date', headerName: 'Date', width: 160 },
    // { field: 'status', headerName: 'Status', width: 90 },
    {
      field: 'total', headerName: 'Total sum', width: 160,
    },
    { field: 'delivered', headerName: "delivered", width: 140 },
    {
      field: 'orders', headerName: "Orders", width: 140, renderCell: (params) => {
        return (
          <>
            <Link className='orderLink' to={`/orders/${params.row.id}`} >
              <button className="orderLinkButton">order details</button>
            </Link>
          </>
        )
      }
    },
    {
      field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        return (
          <>
            <Link to={`/customer/${params.row.id}`} >
              <button className="customersEdit">Edit</button>
            </Link >
            <DeleteOutline className="customersDelete" onClick={() => handleDelete(params.row.id)} />
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


