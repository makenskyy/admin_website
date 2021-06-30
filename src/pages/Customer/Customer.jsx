import React, { useParams } from 'react'
import './customer.css';

import DetailsIcon from '@material-ui/icons/Details';
import { LocationSearching } from '@material-ui/icons';

import { Link } from 'react-router-dom';

export const Customer = () => {
  // const { id } = useParams();
  // console.log(id);
  // чекните, вот эту линию че-то useParams() не работает тут, хотел использовать это для /orders/:id на 48м линии
  return (
    <div className="customer">
      <div className="titleContainer">
        <h1 className="title">Edit costumer</h1>
      </div>
      <div className="container">
        <div className="show">

          <div className="showTitleTop">
            <div className="showUsername">David Laid</div>
            <div className="showPosition">Costumer</div>
          </div>

          <div className="showBottom">
            <span className="showTitle">Account details</span>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <span className="showInfoText">david.laid</span>
            </div>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <span className="showInfoText">david.laid@gmail.com</span>
            </div>
            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <span className="showInfoText">Delivered/Not delivered</span>
            </div>
            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <span className="showInfoText">7-775-775-75-75</span>
            </div>
            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <span className="showInfoText">Atyrau, Kazakhstan</span>
            </div>
            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <Link className="ordersLink" to='/orders' >
                <span className="showInfoText">Orders (click to see)</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Update account details</span>
          <form className="updateForm">
            <div className="updateLeft">
              <div className="updateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="david.laid"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="david.laid@gmail.com"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="7-775-775-75-75"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Atyrau, Kazakhstan"
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
