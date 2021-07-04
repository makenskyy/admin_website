import React from 'react'
import './dashboard.css'

import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <div className="dashboard">
        <FeaturedInfo />
      </div>
    </>
  )
}

export default Dashboard;