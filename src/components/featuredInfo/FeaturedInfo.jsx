import React from 'react'
import styles from './featuredInfo.module.scss'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const FeaturedInfo = () => {
  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.left_container}>
          <div className={`${styles.item} ${styles.leftContainerItem1}`}>
            <div className={styles.item_left}>
              <span className={styles.quantity}>0 $</span>
              <br></br>
              <span className={styles.title}>Monthly Revenue</span>
            </div>
            <div className={styles.item_right}>
              <AttachMoneyIcon className={styles.itemIcon} />
            </div>
          </div>
          <div className={`${styles.item} ${styles.leftContainerItem2}`}>
            <div className={styles.item_left}>
              <span className={styles.quantity}>0</span>
              <br></br>
              <span className={styles.title}>New Orders</span>
            </div>
            <div className={styles.item_right}>
              <ShoppingCartIcon className={styles.itemIcon} />
            </div>
          </div>
          <div className={`${styles.item} ${styles.leftContainerItem3}`}>
            <div className={styles.item_left}>
              <span className={styles.pendingOrdersTitle}>Pending orders</span>
            </div>
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.item}>
            <div className={styles.item_left}>
              <span className={styles.quantity}>6</span>
              <br></br>
              <span className={styles.title}>Pending Reviews</span>
              <ul className={styles.list}>
                <li className={styles.list_element}>review</li>
                <li className={styles.list_element}>review</li>
                <li className={styles.list_element}>review</li>
                <li className={styles.list_element}>review</li>
                <li className={styles.list_element}>review</li>
                <li className={styles.list_element}>review</li>
              </ul>
            </div>
            <div className={styles.item_right}>
              <CommentIcon className={styles.itemIcon} />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_left}>
              <span className={styles.quantity}>0 </span>
              <br></br>
              <span className={styles.title}>New Customers</span>
            </div>
            <div className={styles.item_right}>
              <PersonAddIcon className={styles.itemIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedInfo;