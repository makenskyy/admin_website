
import styles from './products.module.scss';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"

import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../../store/authReducer';

import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../store/useTypesSelector';



export default function Products() {

  const products = useTypedSelector(state => state.authReducer.products);

  const [data, setData] = useState(products);

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
    dispatch(deleteProductAction(id));
  }

  const columns = [
    { field: 'id', headerName: 'id', width: 90 },
    { field: 'productName', headerName: 'Product Name', width: 180 },
    { field: 'status', headerName: 'Status', width: 180 },
    {
      field: 'price', headerName: 'Price', width: 160, renderCell: (params: any) => {
        return (
          <>${params.value}</>
        )
      }
    },
    { field: "quantity", headerName: "Quantity", width: 160 },
    {
      field: "action", headerName: "Action", width: 150, renderCell: (params: any) => {
        return (
          <>
            <Link to={`/product/${params.data.id}`} >
              <button className={styles.productsEdit}>Edit</button>
            </Link >
            <DeleteOutline className={styles.productsDelete} onClick={() => handleDelete(params.data.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className={styles.products}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Products</h1>
        <Link to='/newProduct'>
          <button className={styles.createProduct}>Create</button>
        </Link>
      </div>
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick scrollbarSize={15} />
    </div>
  );
}



