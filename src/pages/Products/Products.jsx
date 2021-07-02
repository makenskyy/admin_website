
import './products.css';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { products } from '../../data/data';
import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';


export default function Products() {
  const [data, setData] = useState(products);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'id', width: 90 },
    { field: 'productName', headerName: 'Product Name', width: 180 },
    { field: 'status', headerName: 'Status', width: 180 },
    {
      field: 'price', headerName: 'Price', width: 160,
    },
    { field: "quantity", headerName: "Quantity", width: 160 },
    {
      field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.data.id}`} >
              <button className="productsEdit">Edit</button>
            </Link >
            <DeleteOutline className="productsDelete" onClick={() => handleDelete(params.data.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className="products">
      <div className="titleContainer">
        <h1 className="title">Products</h1>
        <Link to='/newProduct'>
          <button className="createProduct">Create</button>
        </Link>
      </div>
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}



