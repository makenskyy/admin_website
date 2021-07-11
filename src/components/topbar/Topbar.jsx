import React, { useState, useEffect } from 'react'
import styles from './topbar.module.scss';
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

  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbarWrapper}>
          <div className={styles.topLeft}>
            {icons ?
              isToggledMenuButton ?
                <>
                  <CloseIcon className={styles.topbarMenuIcon} onClick={() => toggleMenuButton()} />
                </>
                :
                <>
                  <MenuIcon className={styles.topbarMenuIcon} onClick={() => toggleMenuButton()} />
                </>
              : <span className={styles.logo}>Admin page</span>
            }
          </div>
          <div className={styles.topRight}>
            Welcome, {username}
          </div>
        </div>
      </div>
    </>
  )
}
