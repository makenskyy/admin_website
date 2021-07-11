import React from 'react'
import styles from './dashboard.module.scss'

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <FeaturedInfo />
      </div>
    </>
  )
}

export default Dashboard;