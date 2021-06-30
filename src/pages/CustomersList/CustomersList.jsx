
import './customersList.css';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { userRows } from '../../data/data';

import { Link } from 'react-router-dom';


export default function CustomersList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 180 },
    { field: 'email', headerName: 'Email', width: 180 },
    // { field: 'status', headerName: 'Status', width: 90 },
    {
      field: 'transaction', headerName: 'Transaction', width: 160,
    },
    {
      field: 'orders', headerName: "Orders", width: 160, renderCell: (params) => {
        return (
          <>
            <Link className='orderLink' to={`/orders/${params.row.id}`} >
              <p className="orderLinkText">too see here</p>
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
              <button className="customersListEdit">Edit</button>
            </Link >
            <DeleteOutline className="customersListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className="customersList">
      <DataGrid rows={data} columns={columns} pageSize={5} disableSelectionOnClick />
    </div>
  );
}



