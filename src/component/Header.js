import React from 'react'
import logo from "../assets/image/logo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const title = (
    <a href="/">
        <img
            className="logo p-2 h-20 rounded-3xl"
            src={logo}
        ></img>
    </a>
)

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
  return (
    <div className="flex justify-between bg-green-50 h-20 mx-2">
            {title}
            <div>
                <ul className="flex py-6">
                    <li className='px-2'><Link to='/' className='nav-link'>Home</Link></li>
                    <li className='px-2'><Link to='/about' className='nav-link'>About Us</Link></li>
                    <li className='px-2'><Link to='/contact' className='nav-link'>Contact</Link></li>
                    <li className='px-2'><Link to='/github' className='nav-link'>Github</Link></li>
                    <li className='px-2'><Link to='/instamart' className='nav-link'>Instamart</Link></li>
                    <li className='px-2'><Link to='/cart' className='nav-link'>Cart - {cartItems.length} items </Link></li>
                    <li className='px-2'><Link to='/SignUp' className='nav-link'>Sign UP</Link></li>

                </ul>
            </div>
        </div>
  )
}

export default Header