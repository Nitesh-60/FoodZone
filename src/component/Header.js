import React from 'react'
import { burgerKing } from '../constant'


const title = (
    <a href="/">
        <img
            className="logo"
            src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
        ></img>
    </a>
)

const Header = () => {
  return (
    <div className="head">
            {title}
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
  )
}

export default Header