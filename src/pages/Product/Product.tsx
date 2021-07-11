import React, { useState } from 'react'
import styles from './product.module.scss'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import DetailsIcon from '@material-ui/icons/Details';
import { useHistory } from 'react-router';
import { updateProductAction } from '../../store/authReducer';
import { useTypedSelector } from '../../store/useTypesSelector';


const Product = () => {

  const useParamsInt = () => {
    const { id } = useParams<ParamTypes>();
    return parseInt(id);
  }
  // для того что бы парсить из useParams()
  const id = useParamsInt();

  const history = useHistory();
  const dispatch = useDispatch();

  const currentProduct = useTypedSelector(state => state.authReducer.products).filter(item => item.id === id)[0];
  // тут крч после филтера array там нужно было выбрать [0] индекс, потому что там было тот обджект который мне нужен был , а на первом индексе какой-то прототиппа сондай болды


  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [status, setStatus] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProductAction({ id, productName, status, quantity, price }));
    history.push('/products');
  }

  return (
    <div className={styles.product}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Product</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.show}>
          <div className={styles.showTitleTop}>{currentProduct.productName}</div>
          <div className={styles.showBottom}>
            <span className={styles.showTitle}>Product details</span>

            <div className={styles.showInfo}>
              <DetailsIcon className={styles.showIcon} />
              <p className={styles.infoTitle}>Quantity:  </p>
              <span className={styles.showInfoText}> {currentProduct.quantity}</span>
            </div>
            <div className={styles.showInfo}>
              <DetailsIcon className={styles.showIcon} />
              <p className={styles.infoTitle}>Status: { } </p>
              <span className={styles.showInfoText}> {currentProduct.status}</span>
            </div>
            <div className={styles.showInfo}>
              <DetailsIcon className={styles.showIcon} />
              <p className={styles.infoTitle}>Price:  </p>
              <span className={styles.showInfoText}> ${currentProduct.price}</span>
            </div>

          </div>
        </div>
        <div className={styles.update}>
          <span className={styles.updateTitle}>Update product details</span>
          <form className={styles.updateForm} onSubmit={submit}>
            <div className={styles.updateLeft}>
              <div className={styles.updateItem}>
                <label>Product name</label>
                <input
                  type="text"
                  placeholder={currentProduct.productName}
                  className={styles.updateInput}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className={styles.updateItem}>
                <label>Quantity </label>
                <input
                  type="text"
                  placeholder={currentProduct.quantity}
                  className={styles.updateInput}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
              <div className={styles.updateItem}>
                <label>Status</label>
                <input
                  type="text"
                  placeholder={currentProduct.status}
                  className={styles.updateInput}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className={styles.updateItem}>
                <label>Price</label>
                <input
                  type="text"
                  placeholder={currentProduct.price}
                  className={styles.updateInput}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.updateRight}>
              <button className={styles.updateButton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Product;


interface ParamTypes {
  id: string
}