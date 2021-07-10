import React from 'react'
import './sidebar.css'
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
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link className='linkStyle' to='/dashboard' onClick={() => toggleMenuButton()}>
                  <li className="sidebarListItem">
                    <DashboardIcon className="sidebarIcon" />
                    <p className="sidebarListItemName">Dashboard</p>
                  </li>
                </Link>
                <Link className='linkStyle' to='/products' onClick={() => toggleMenuButton()}>
                  <li className="sidebarListItem">
                    <StoreIcon className="sidebarIcon" />
                    <p className="sidebarListItemName">Products</p>
                  </li>
                </Link>
                <Link className='linkStyle' to='/customers' onClick={() => toggleMenuButton()}>
                  <li className="sidebarListItem">
                    <PersonIcon className="sidebarIcon" />
                    <p className="sidebarListItemName">Customers</p>
                  </li>
                </Link>
                <Link className='linkStyle' to='/orders' onClick={() => toggleMenuButton()}>
                  <li className="sidebarListItem">
                    <AllInboxIcon className="sidebarIcon" />
                    <p className="sidebarListItemName">Orders</p>
                  </li>
                </Link>
                <Link className='linkStyle' to='/settings' onClick={() => toggleMenuButton()}>
                  <li className="sidebarListItem">
                    <SettingsIcon className="sidebarIcon" />
                    <p className="sidebarListItemName">Settings</p>
                  </li>
                </Link>
                <Link className='linkStyle' to='/logout' onClick={logout} onClick={() => toggleMenuButton()}>
                  <li className="sidebarListItem">
                    <ExitToAppIcon className="sidebarIcon" />
                    <p className="sidebarListItemName">Logout</p>
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