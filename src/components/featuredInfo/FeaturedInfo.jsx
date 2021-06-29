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
        <div className="left_container">
          <div className="item leftContainerItem1">
            <div className="item_left">
              <span className="quantity">0 $</span>
              <br></br>
              <span className="title">Monthly Revenue</span>
            </div>
            <div className="item_right">
              <AttachMoneyIcon className="itemIcon" />
            </div>
          </div>
          <div className="item leftContainerItem2">
            <div className="item_left">
              <span className="quantity">0</span>
              <br></br>
              <span className="title">New Orders</span>
            </div>
            <div className="item_right">
              <ShoppingCartIcon className="itemIcon" />
            </div>
          </div>
          <div className="item leftContainerItem3">
            <div className="item_left">
              <span className="pendingOrdersTitle">Pending orders</span>
            </div>

          </div>

        </div>
        <div className="right_container">
          <div className="item">
            <div className="item_left">
              <span className="quantity">6</span>
              <br></br>
              <span className="title">Pending Reviews</span>
              <ul className="list">
                <li className="list_element">review</li>
                <li className="list_element">review</li>
                <li className="list_element">review</li>
                <li className="list_element">review</li>
                <li className="list_element">review</li>
              </ul>
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
      </div>
    </>
  )
}

export default FeaturedInfo;