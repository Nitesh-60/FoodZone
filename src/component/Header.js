import React from 'react'
import { burgerKing } from '../constant'
import logo from "../assets/image/logo.png"
import { Link } from 'react-router-dom'


const title = (
    <a href="/">
        <img
            className="logo"
            src={logo}
        ></img>
    </a>
)

const Header = () => {
  return (
    <div className="head">
            {title}
            <div className="nav">
                <ul>
                    <li><Link to='/' className='nav-link'>Home</Link></li>
                    <li><Link to='/about' className='nav-link'>About Us</Link></li>
                    <li><Link to='/contact' className='nav-link'>Contact</Link></li>
                    <li><Link to='/github' className='nav-link'>Github</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
  )
}

export default Header