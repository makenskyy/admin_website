import React, { useState } from 'react'
import styles from './customer.module.scss';
import { useParams } from 'react-router-dom';

import DetailsIcon from '@material-ui/icons/Details';
import { LocationSearching } from '@material-ui/icons';
import { updateCustomerAction } from '../../store/authReducer';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../store/useTypesSelector';

export const Customer: React.FC = () => {
  const useParamsInt = () => {
    const { id } = useParams<ParamTypes>();
    return parseInt(id);
  }
  const id = useParamsInt();

  const history = useHistory();
  const dispatch = useDispatch();

  const customer = useTypedSelector(state => state.authReducer.customers).filter(customer => customer.id === id)[0];

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateCustomerAction({ username, firstName, lastName, email, phoneNumber, id }));
    history.push('/customers');
  }


  return (
    <div className={styles.customer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Edit costumer</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.show}>
          <div className={styles.showTitleTop}>
            <div className={styles.showUsername}>{customer.firstName} {customer.lastName}</div>
            <div className={styles.showPosition}>Costumer</div>
          </div>
          <div className={styles.showBottom}>
            <span className={styles.showTitle}>Account details</span>
            <div className={styles.showInfo}>
              <DetailsIcon className={styles.showIcon} />
              <span className={styles.showInfoText}>{customer.username}</span>
            </div>

            <div className={styles.showInfo}>
              <DetailsIcon className={styles.showIcon} />
              <span className={styles.showInfoText}>{customer.email}</span>
            </div>
            <div className={styles.showInfo}>
              <LocationSearching className={styles.showIcon} />
              <span className={styles.showInfoText}>{customer.phoneNumber}</span>
            </div>
            <div className={styles.showInfo}>
              <LocationSearching className={styles.showIcon} />
              <Link className={styles.ordersLink} to={`/customer/${id}/orders`} >
                <span className={styles.showInfoText}>Orders (click to see)</span>
              </Link>
            </div>


          </div>
        </div>
        <div className={styles.update}>
          <span className={styles.updateTitle}>Update account details</span>
          <form className={styles.updateForm} onSubmit={submit}>
            <div className={styles.updateLeft}>
              <div className={styles.updateItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder={customer.username}
                  className={styles.updateInput}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={styles.updateItem}>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder={customer.firstName}
                  className={styles.updateInput}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={styles.updateItem}>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder={customer.lastName}
                  className={styles.updateInput}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={styles.updateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder={customer.email}
                  className={styles.updateInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.updateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={customer.phoneNumber}
                  className={styles.updateInput}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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

interface ParamTypes {
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string
}