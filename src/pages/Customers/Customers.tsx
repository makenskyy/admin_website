
import styles from './customers.module.scss';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCustomerAction } from '../../store/authReducer';
import { useTypedSelector } from '../../store/useTypesSelector';

const Customers: React.FunctionComponent = () => {

  const dispatch = useDispatch();


  const customers = useTypedSelector(state => state.authReducer.customers);
  const orders = useTypedSelector(state => state.authReducer.orders);

  const [data, setData] = useState<any>(customers);

  const handleDelete = (id: number) => {

    setData(data.filter((item: any) => item.id !== id));
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
      field: 'orders', headerName: "Orders", width: 140, renderCell: (params: any) => {
        return (
          <>
            <Link className={styles.orderLink} to={`/customer/${params.data.id}/orders`} >
              <button className={styles.orderLinkButton}>view orders</button>
            </Link>
          </>
        )
      }
    },
    {
      field: "action", headerName: "Action", width: 150, renderCell: (params: any) => {
        return (
          <>
            <Link to={`/customer/${params.data.id}`} >
              <button className={styles.customersEdit}>Edit</button>
            </Link >
            <DeleteOutline className={styles.customersDelete} onClick={() => handleDelete(params.data.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className={styles.customers}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Customers</h1>
      </div>
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}




export default Customers;