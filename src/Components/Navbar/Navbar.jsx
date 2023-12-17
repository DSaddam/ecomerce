import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState('Shop');
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link style={{ textDecoration: 'none' }} to='/'>    <img src={logo} alt="" /></Link>
                <Link style={{ textDecoration: 'none' }} to='/'><p>SHOPPER</p></Link>

            </div>
            <ul className="nac-menu">
                <li onClick={() => { setMenu('shop') }}> <Link style={{ textDecoration: 'none' }} to='/shop'>Shop</Link>  {menu === 'shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('mens') }}><Link style={{ textDecoration: 'none' }} to='/men'>Mens</Link>  {menu === 'men' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('women') }}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link> {menu === 'women' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu('kid') }}><Link style={{ textDecoration: 'none' }} to='/kid'>Kids</Link> {menu === 'kid' ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-logo-cart">
                <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
                <Link style={{ textDecoration: 'none' }} to='/cart'>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
