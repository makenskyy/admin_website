import React, { useState, useEffect } from 'react'
import { useParams, Link, Route, useHistory } from 'react-router-dom';
import styles from './customerOrders.module.scss';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { customers } from '../../data/data';

import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../store/useTypesSelector';

function CustomerOrders() {

  const useParamsInt = () => {
    const { id } = useParams<ParamTypes>();
    return parseInt(id);
  }
  const id = useParamsInt();

  const customer = useTypedSelector(state => state.authReducer.customers).filter(customer => customer.id === id)[0];
  // тут крч после филтера array там нужно было выбрать [0] индекс, потому что там было тот обджект который мне нужен был , а на первом индексе какой-то прототиппа сондай болды

  const orders_id = customer.orders_id;
  const orders = useTypedSelector(state => state.authReducer.orders).filter(order => orders_id.includes(order.id));


  const [data, setData] = useState(orders);
  const history = useHistory();

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
  }

  const handleRedirectPage = (id: number) => {
    history.push(`/orders/${id}`)
  }


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'productName', headerName: 'Product name', width: 170 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'total', headerName: 'Total', width: 120 },
    { field: 'delivered', headerName: 'Delivered', width: 140 },
    { field: "paymentMethod", headerName: "Payment Method", width: 140 },
    { field: "shippingAddress", headerName: "Shipping address", width: 140 },
    {
      field: 'orders', headerName: "Orders", width: 120, renderCell: (params: any) => {
        return (
          <>
            <button className={styles.orderLinkButton} onClick={() => handleRedirectPage(params.data.id)} >
              order summary
            </button>
          </>
        )
      }
    },
    {
      field: "action", headerName: "Action", width: 150, renderCell: (params: any) => {
        return (
          <>
            <Link to={`/customer/${params.data.id}`} >
              <button className={styles.customersEdit} >Edit</button>
            </Link >
            <DeleteOutline className={styles.customersDelete} onClick={() => handleDelete(params.data.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className={styles.customerOrders}>
      <h1>{customer.firstName} {customer.lastName}'s orders</h1>
      <DataGrid rows={data} columns={columns} pageSize={6} disableSelectionOnClick />
    </div>
  );
}

export default CustomerOrders;


interface ParamTypes {
  id: string
}