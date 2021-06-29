import React from 'react'
import './sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DashboardIcon className="sidebarIcon" />
              <p className="sidebarListItemName">Dashboard</p>
            </li>
            <li className="sidebarListItem">
              <PersonIcon className="sidebarIcon" />
              <p className="sidebarListItemName">Customers</p>
            </li>
            <li className="sidebarListItem">
              <DashboardIcon className="sidebarIcon" />
              <p className="sidebarListItemName">Settings</p>
            </li>
            <li className="sidebarListItem">
              <ExitToAppIcon className="sidebarIcon" />
              <p className="sidebarListItemName">Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;