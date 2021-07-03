import React, { useState } from 'react'
import './customer.css';
import { useParams } from 'react-router-dom';

import DetailsIcon from '@material-ui/icons/Details';
import { LocationSearching } from '@material-ui/icons';
import { updateCustomerAction } from '../../store/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export const Customer = () => {
  const useParamsInt = () => {
    const { id } = useParams();
    return parseInt(id);
  }

  const history = useHistory();
  const id = useParamsInt();
  const dispatch = useDispatch();

  const customer = useSelector(state => state.authReducer.customers).filter(customer => customer.id === id)[0];


  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const submit = (e) => {
    e.preventDefault();
    dispatch(updateCustomerAction({ username, firstName, lastName, email, phoneNumber, id }));
    history.push('/customers');
  }

  return (
    <div className="customer">
      <div className="titleContainer">
        <h1 className="title">Edit costumer</h1>
      </div>
      <div className="container">
        <div className="show">

          <div className="showTitleTop">
            <div className="showUsername">{customer.firstName} {customer.lastName}</div>
            <div className="showPosition">Costumer</div>
          </div>

          <div className="showBottom">
            <span className="showTitle">Account details</span>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <span className="showInfoText">{customer.username}</span>
            </div>
            <div className="showInfo">
              <DetailsIcon className="showIcon" />
              <span className="showInfoText">{customer.email}]</span>
            </div>
            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <span className="showInfoText">{customer.phoneNumber}</span>
            </div>
            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <Link className="ordersLink" to={`/customer/${id}/orders`} >
                <span className="showInfoText">Orders (click to see)</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Update account details</span>
          <form className="updateForm" onSubmit={submit}>
            <div className="updateLeft">
              <div className="updateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="david.laid"
                  className="updateInput"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="updateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="David"
                  className="updateInput"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="updateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="David"
                  className="updateInput"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="updateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="david.laid@gmail.com"
                  className="updateInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="updateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="7-775-775-75-75"
                  className="updateInput"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
