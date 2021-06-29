import React from 'react'
import './featuredInfo.css'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const FeaturedInfo = () => {
  return (
    <>
      <div className="itemContainer">
        <div className="item">
          <div className="item_left">
            <span className="quantity">0 $</span>
            <br></br>
            <span className="title">Monthly Revenue</span>
          </div>
          <div className="item_right">
            <AttachMoneyIcon className="itemIcon" />
          </div>
        </div>
        <div className="item">
          <div className="item_left">
            <span className="quantity">0</span>
            <br></br>
            <span className="title">New Orders</span>
          </div>
          <div className="item_right">
            <ShoppingCartIcon className="itemIcon" />
          </div>
        </div>
        <div className="item">
          <div className="item_left">
            <span className="quantity">44</span>
            <br></br>
            <span className="title">Pending Reviews</span>
          </div>
          <div className="item_right">
            <CommentIcon className="itemIcon" />
          </div>
        </div>
        <div className="item">
          <div className="item_left">
            <span className="quantity">0 </span>
            <br></br>
            <span className="title">New Customers</span>
          </div>
          <div className="item_right">
            <PersonAddIcon className="itemIcon" />
          </div>
        </div>
      </div>
      <div className="pendingOrdersContainer">
        <div className="pendingOrders">
          <p className="pendingOrdersText">Pending orders</p>
        </div>
        <div className="dummy"></div>
      </div>
    </>
  )
}

export default FeaturedInfo;