import React from 'react'
import './sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link className='linkStyle' to='/dashboard' >
              <li className="sidebarListItem">
                <DashboardIcon className="sidebarIcon" />
                <p className="sidebarListItemName">Dashboard</p>
              </li>
            </Link>
            <Link className='linkStyle' to='/customers'>
              <li className="sidebarListItem">
                <PersonIcon className="sidebarIcon" />
                <p className="sidebarListItemName">Customers</p>
              </li>
            </Link>
            <Link className='linkStyle' to='/settings'>
              <li className="sidebarListItem">
                <DashboardIcon className="sidebarIcon" />
                <p className="sidebarListItemName">Settings</p>
              </li>
            </Link>
            <Link className='linkStyle' to='/login'>
              <li className="sidebarListItem">
                <ExitToAppIcon className="sidebarIcon" />
                <p className="sidebarListItemName">Logout</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;