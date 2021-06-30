import React from 'react'
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">Create New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label className="newProductLabel">Name</label>
          <input type="text" placeholder="Iphone 12 PRO" />
        </div>
        <div className="newProductItem">
          <label className="newProductLabel">Stock</label>
          <input type="text" placeholder="12" />
        </div>
        <div className="newProductItem">
          <label className="newProductLabel" >Active</label>
          <input type="text" placeholder="Yes" />
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  )
}

export default NewProduct;