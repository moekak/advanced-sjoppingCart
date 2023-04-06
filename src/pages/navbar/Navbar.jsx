import React from 'react'
import './navbar.css'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="logo">
            <h1>Mo</h1>
        </div>
        <div className="nav">
            <ul>
                <li><a href="/">New arrival</a></li>
                <li><a href="/">Brands</a></li>
                <li><a href="/">Category</a></li>
            </ul>
        </div>
        <div className="search">
            <form>
                <input type="search" />
            </form>
        </div>
        <div className="cart-logo">
            <AiOutlineShoppingCart/>
            <AiOutlineUserAdd/>
        </div>
    </div>
  )
}

export default Navbar