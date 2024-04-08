import React, { useContext, useState } from 'react'; // Importing useContext and useState
import { ShopContext } from './Context/ShopContext'; // Correcting the import path

import './Navbar.css';
import logo from './assets/Navbar/logo.png';
import cart from './assets/Navbar/cart.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const { getTotalCartItem} = useContext(ShopContext); // Destructuring getTotalCartAmount from the context
    
    const [menu, setMenu] = useState('Shop'); // Fixing useState syntax

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Company logo" />
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu('Shop') }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "Shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('Mobile') }}>
                    <Link style={{ textDecoration: 'none' }} to='/Mobile'>Mobile</Link>
                    {menu === "Mobile" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('Laptop') }}>
                    <Link style={{ textDecoration: 'none' }} to='/Laptops'>Laptops</Link>
                    {menu === "Laptop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('Wearable') }}>
                    <Link style={{ textDecoration: 'none' }} to='/Wearables'>Wearables</Link>
                    {menu === "Wearable" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="new-login-cart">
                <Link to="/LoginSignup"><button>Login</button></Link>
                <Link to="/Cart"><img id="cart-icon" src={cart} alt="Cart icon" /></Link>
                <div className="cart-counter">{getTotalCartItem()}</div> {/* Calling getTotalCartAmount */}
            </div>
        </div>
    );
}

export default Navbar;
