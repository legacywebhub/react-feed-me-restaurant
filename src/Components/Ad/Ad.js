import React from 'react'
import './Ad.css'
import AdImage from '../../Assets/Images/banner_landscape.png'

const Ad = () => {
  return (
    <div className='ad'>
        <img src={AdImage} alt="meal ad" />
    </div>
  )
}

export default Ad