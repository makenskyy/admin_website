import React, { useState, useEffect } from 'react'
import { useParams, Link, Route, useHistory } from 'react-router-dom';
import './customerOrders.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons"
import { customers } from '../../data/data';


function CustomerOrders() {

  const { id } = useParams();

  const orders = customers.filter(customer => customer.id == id).map(customer => customer.orders);

  const [data, setData] = useState(orders[0]);
  const history = useHistory();

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const handleRedirectPage = (id) => {
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
      field: 'orders', headerName: "Orders", width: 120, renderCell: (params) => {
        return (
          <>
            <button className="orderLinkButton" onClick={() => handleRedirectPage(params.data.id)} >
              order summary
            </button>
          </>
        )
      }
    },
    {
      field: "action", headerName: "Action", width: 150, renderCell: (params) => {
        return (
          <>
            <Link to={`/customer/${params.data.id}`} >
              <button className="customersEdit" >Edit</button>
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





export default CustomerOrders;