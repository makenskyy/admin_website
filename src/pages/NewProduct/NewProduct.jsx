import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./newProduct.css";

import { useDispatch } from 'react-redux';
import { products } from '../../data/data';
import { createProductAction } from '../../store/authReducer';
import { useHistory } from 'react-router';

const NewProduct = () => {

  const productsSize = useSelector(state => state.authReducer.products.length);
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [status, setStatus] = useState("");
  const id = new Date().valueOf();


  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    dispatch(createProductAction({ id, productName, status, quantity, price }));
    history.push('/products');
  }

  return (
    <div className="newProduct">
      <h1 className="newProductTitle">Create New Product</h1>
      <form className="newProductForm" onSubmit={submit}>
        <div className="newProductItem">
          <label className="newProductLabel">Product Name</label>
          <input type="text" placeholder="Iphone 12 PRO" required value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="newProductItem">
          <label className="newProductLabel">Quantity</label>
          <input type="text" placeholder="12" required value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className="newProductItem">
          <label className="newProductLabel" >Price</label>
          <input type="text" placeholder="400.00" required value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="newProductItem">
          <label className="newProductLabel" >Active</label>
          <input type="text" placeholder="not-active" required value={status} onChange={(e) => setStatus(e.target.value)} />
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  )
}

export default NewProduct;