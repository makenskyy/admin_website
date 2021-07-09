import React, { useState, useEffect } from 'react'
import './topbar.css';
import { useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { toggleMenuButtonAction } from '../../store/authReducer';
import { useTypedSelector } from '../../store/useTypesSelector';
import { useDispatch } from 'react-redux';

export default function Topbar() {

  const dispatch = useDispatch();
  const [icons, showIcons] = useState(false);

  const username = useTypedSelector(state => state.authReducer.authInfo.username);

  const isToggledMenuButton = useTypedSelector(state => state.authReducer.isToggledMenuButton);



  const showSidebar = () => {
    if (window.innerWidth < 1000) {
      dispatch(toggleMenuButtonAction(false));
      showIcons(true);
    } else {
      showIcons(false);
      dispatch(toggleMenuButtonAction(true));
    }
  }
  useEffect(() => {
    showSidebar();
  }, []);
  window.addEventListener('resize', showSidebar);


  const toggleMenuButton = () => {
    dispatch(toggleMenuButtonAction(!isToggledMenuButton));
  }
  console.log("Icons is " + icons);

  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            {icons ?
              isToggledMenuButton ?
                <>
                  <CloseIcon className="topbarMenuIcon" onClick={() => toggleMenuButton()} />
                </>
                :
                <>
                  <MenuIcon className="topbarMenuIcon" onClick={() => toggleMenuButton()} />
                </>
              : <span className="logo">Admin page</span>
            }
          </div>
          <div className="topRight">
            Welcome, {username}
          </div>
          {/* если что тут можно добавить типо логаут что-то такое */}
        </div>
      </div>
    </>
  )
}
