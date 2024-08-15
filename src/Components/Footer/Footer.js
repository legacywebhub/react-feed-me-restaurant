import React from 'react'
import './Footer.css'
import { FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className='footer__title'>
          Our Branch
        </div>
        <div className='main__footer'>
          <div className='footer__part'>
            <h3>Robert Food</h3>
            <h5 className='address'>1986 HillTop DriveBorger, TX 79007</h5>
            <p className='info'><span><FaClock /> 7:30AM - 9:30PM</span><span><FaPhone /> +880 1630 225 015</span></p>
            <p>click to view google map</p>
          </div>
          <div className='footer__part'>
            <h3>Mark A. Reed Food</h3>
            <h5 className='address'>1986 HillTop DriveBorger, TX 79007</h5>
            <p className='info'><span><FaClock /> 7:30AM - 9:30PM</span><span><FaPhone /> +880 1630 225 015</span></p>
            <p>click to view google map</p>
          </div>
          <div className='footer__part'>
            <h3>Karie K. Hill Food</h3>
            <h5 className='address'>1986 HillTop DriveBorger, TX 79007</h5>
            <p className='info'><span><FaClock /> 7:30AM - 9:30PM</span><span><FaPhone /> +880 1630 225 015</span></p>
            <p>click to view google map</p>
          </div>
        </div>
        <div className='sub__footer'>
          Copyright &copy;2024 | Feed Me Restaurant Group 1
        </div>
    </div>
  )
}

export default Footer