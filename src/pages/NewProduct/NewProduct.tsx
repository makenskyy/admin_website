import React, { useState } from 'react'
import "./newProduct.css";

import { useDispatch } from 'react-redux';
import { createProductAction } from '../../store/authReducer';
import { useHistory } from 'react-router';

const NewProduct: React.FC = () => {

  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [status, setStatus] = useState("");
  const id = new Date().valueOf();


  const history = useHistory();

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
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
          <input type="number" placeholder="12" required value={quantity} onChange={(e: React.FormEvent<HTMLInputElement>) => setQuantity(parseInt(e.currentTarget.value))} />
        </div>
        <div className="newProductItem">
          <label className="newProductLabel" >Price</label>
          <input type="number" placeholder="400.00" required value={price} onChange={(e: React.FormEvent<HTMLInputElement>) => setPrice(e.currentTarget.value)} />
        </div>
        <div className="newProductItem">
          <label className="newProductLabel" >Active</label>
          <input type="text" placeholder="not-active" required value={status} onChange={(e: React.FormEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)} />
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  )
}

export default NewProduct;

interface States {
  productName: string,
  price: string,
  quantity: number,
  status: string
}