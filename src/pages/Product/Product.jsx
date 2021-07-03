import React, { useState } from 'react'
import './product.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import DetailsIcon from '@material-ui/icons/Details';
import { useHistory } from 'react-router';
import { updateProductAction } from '../../store/authReducer';

const Product = () => {

  const useParamsInt = () => {
    const { id } = useParams();
    return parseInt(id);
  }

  const history = useHistory();
  const id = useParamsInt();
  const dispatch = useDispatch();

  const currentProduct = useSelector(state => state.authReducer.products).filter(item => item.id === id)[0];
  // тут крч после филтера array там нужно было выбрать [0] индекс, потому что там было тот обджект который мне нужен был , а на первом индексе какой-то прототиппа сондай болды


  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [status, setStatus] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction({ id, productName, status, quantity, price }));
    history.push('/products');
  }

  return (
    <div className="product">
      <div className="titleContainer">
        <h1 className="title">Product</h1>
      </div>
      <div className="container">
        <div className="show">
          <div className="showTitleTop">{currentProduct.productName}</div>
          <div className="showBottom">
            <span className="showTitle">Product details</span>

            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <p className="infoTitle">Quantity: </p>
              <span className="showInfoText">{currentProduct.quantity}</span>
            </div>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <p className="infoTitle">Status: </p>
              <span className="showInfoText">{currentProduct.status}</span>
            </div>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <p className="infoTitle">Price: </p>
              <span className="showInfoText">${currentProduct.price}</span>
            </div>

          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Update product details</span>
          <form className="updateForm" onSubmit={submit}>
            <div className="updateLeft">
              <div className="updateItem">
                <label>Product name</label>
                <input
                  type="text"
                  placeholder={currentProduct.productName}
                  className="updateInput"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="updateItem">
                <label>Quantity </label>
                <input
                  type="text"
                  placeholder={currentProduct.quantity}
                  className="updateInput"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="updateItem">
                <label>Status</label>
                <input
                  type="text"
                  placeholder={currentProduct.status}
                  className="updateInput"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="updateItem">
                <label>Price</label>
                <input
                  type="text"
                  placeholder={currentProduct.price}
                  className="updateInput"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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