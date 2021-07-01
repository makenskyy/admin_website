
import './customers.css';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { userRows } from '../../data/data';

import { Link } from 'react-router-dom';
import { customers } from '../../data/data';

export default function Customers() {

  const [data, setData] = useState(customers);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
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
            <Link className='orderLink' to={`/customer/${params.row.id}/orders`} >
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
    <div className="customers">
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}



