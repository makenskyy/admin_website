import React from 'react'
import './topbar.css';
import { useSelector } from 'react-redux';

export default function Topbar() {
  const username = useSelector(state => state.authReducer.authInfo.username);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin page</span>
        </div>
        <div className="topRight">
          Welcome, {username}
        </div>
        {/* если что тут можно добавить типо логаут что-то такое */}
      </div>
    </div>
  )
}
