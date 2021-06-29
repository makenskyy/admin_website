import React from 'react'
import './topbar.css';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin page</span>
        </div>
        <div className="topRight"></div>
        {/* если что тут можно добавить типо логаут что-то такое */}
      </div>
    </div>
  )
}
