
import styles from './shops.module.scss';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomerAction, fetchShopsSagaAction } from '../../store/authReducer';
import { useTypedSelector } from '../../store/useTypesSelector';

const Shops /*: React.FunctionComponent*/ = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchShopsSagaAction());
  }, [])

  const shops = useSelector(state => state.authReducer.shops);

  const [data, setData] = useState/*<any>*/(shops);

  useEffect(() => {

    setData(shops);


  }, [shops]);


  // const handleDelete = (id /*: number*/) => {

  //   setData(data.filter((item /*: any*/) => item.id !== id));
  // }


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Shop name', width: 140 },
    { field: 'contact_person', headerName: 'Contact Person', width: 140 },
    { field: 'email', headerName: 'Email', width: 140 },
    { field: 'address', headerName: 'Address', width: 180 },
    { field: "shop_type", headerName: "Shop type", width: 140 },
    { field: "desc", headerName: "Description", width: 140 }
  ];

  return (
    <div className={styles.shops}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Shops</h1>
      </div>
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}




export default Shops;