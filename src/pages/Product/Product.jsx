import React from 'react'
import './product.css'
import { Link } from 'react-router-dom';

import DetailsIcon from '@material-ui/icons/Details';

const Product = () => {
  return (
    <div className="product">
      <div className="titleContainer">
        <h1 className="title">Product</h1>
      </div>
      <div className="container">
        <div className="show">
          <div className="showTitleTop">Iphone 12 PRO</div>
          <div className="showBottom">
            <span className="showTitle">Product details</span>

            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <p className="infoTitle">Quantity: </p>
              <span className="showInfoText">100</span>
            </div>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <p className="infoTitle">Active: </p>
              <span className="showInfoText">yes</span>
            </div>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <p className="infoTitle">Price: </p>
              <span className="showInfoText">$800</span>
            </div>



          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Update product details</span>
          <form className="updateForm">
            <div className="updateLeft">
              <div className="updateItem">
                <label>Product name</label>
                <input
                  type="text"
                  placeholder="Iphone 12 PRO"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Quantity </label>
                <input
                  type="text"
                  placeholder="800"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="active"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Price</label>
                <input
                  type="text"
                  placeholder="$400"
                  className="updateInput"
                />
              </div>
            </div>
            <div className="updateRight">
              <button className="updateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Product;