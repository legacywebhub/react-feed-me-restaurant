import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './Header.css'
import { FaPhone, FaClock, FaBars } from 'react-icons/fa';
import Logo from '../../Assets/Images/restaurant_image.png';

const Header = () => {
  return (
    <div className='header'>
        <div className="sub__header">
          <div className='sub__header__left'>
            <div><FaClock /> 7:30AM - 9:30PM</div><div><FaPhone /> +880 1630 225 015</div>
          </div>
          <div className='sub__header__right'>
            Register
          </div>
        </div>
        <div className="main__header">
          <div className='main__header__left'>
            <img src={ Logo } alt='logo' className='logo' />
          </div>
          <div className='main__header__right'>
            <Routes>
              <Route path="/" element={<span>Home</span>} />
              <Route path="/about" element={<span>About</span>} />
              <Route path="/blog" element={<span>Blog</span>} />
              <Route path="/pages" element={<span>Pages</span>} />
              <Route path="/contact" element={<span>Contact</span>} />
              <Route path="/login" element={<span><button>Login</button></span>} />
            </Routes>
            <span><FaBars className='menu' /></span>
          </div>
        </div>
    </div>
  )
}

export default Header