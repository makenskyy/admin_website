import React from 'react'
import styles from './sidebar.module.scss'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import StoreIcon from '@material-ui/icons/Store';
import { logoutAction, toggleMenuButtonAction } from '../../store/authReducer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/useTypesSelector';


import { Link } from 'react-router-dom';

const Sidebar = () => {

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  }

  const isToggledMenuButton = useTypedSelector(state => state.authReducer.isToggledMenuButton);
  const toggleMenuButton = () => {
    if (window.innerWidth < 1000) {
      dispatch(toggleMenuButtonAction(!isToggledMenuButton));
    }
    console.log(window.innerWidth);
  }

  return (
    <>
      {isToggledMenuButton ?
        <div className={styles.sidebar}>
          <div className={styles.sidebarWrapper}>
            <div className={styles.sidebarMenu}>
              <ul className={styles.sidebarList}>
                <Link className={styles.linkStyle} to='/dashboard' onClick={() => toggleMenuButton()}>
                  <li className={styles.sidebarListItem}>
                    <DashboardIcon className={styles.sidebarIcon} />
                    <p className={styles.sidebarListItemName}>Dashboard</p>
                  </li>
                </Link>
                <Link className={styles.linkStyle} to='/products' onClick={() => toggleMenuButton()}>
                  <li className={styles.sidebarListItem}>
                    <StoreIcon className={styles.sidebarIcon} />
                    <p className={styles.sidebarListItemName}>Products</p>
                  </li>
                </Link>
                <Link className={styles.linkStyle} to='/customers' onClick={() => toggleMenuButton()}>
                  <li className={styles.sidebarListItem}>
                    <PersonIcon className={styles.sidebarIcon} />
                    <p className={styles.sidebarListItemName}>Customers</p>
                  </li>
                </Link>
                <Link className={styles.linkStyle} to='/orders' onClick={() => toggleMenuButton()}>
                  <li className={styles.sidebarListItem}>
                    <AllInboxIcon className={styles.sidebarIcon} />
                    <p className={styles.sidebarListItemName}>Orders</p>
                  </li>
                </Link>
                <Link className={styles.linkStyle} to='/settings' onClick={() => toggleMenuButton()}>
                  <li className={styles.sidebarListItem}>
                    <SettingsIcon className={styles.sidebarIcon} />
                    <p className={styles.sidebarListItemName}>Settings</p>
                  </li>
                </Link>
                <Link className={styles.linkStyle} to='/logout' onClick={logout}>
                  <li className={styles.sidebarListItem}>
                    <ExitToAppIcon className={styles.sidebarIcon} />
                    <p className={styles.sidebarListItemName}>Logout</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div> : null}
    </>
  )
}

export default Sidebar;