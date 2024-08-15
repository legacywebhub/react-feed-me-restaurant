import React from 'react'
import './TitleBanner.css'

const TitleBanner = ({pageTitle, pageDescription}) => {
  return (
    <div className='title__banner'>
        <div className='page__info'>
            <h2 className='page__title'>{pageTitle}</h2>
            <div className='page__description'>{pageDescription}</div>
        </div>
    </div>
  )
}

export default TitleBanner