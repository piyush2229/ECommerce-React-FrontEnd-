import React from 'react';
import logo from '../assets/Navbar/logo.png';
import wb from '../assets/footer/wb.jpg';
import insta from '../assets/footer/insta.jpg';
import pint from '../assets/footer/pint.jpg';
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <hr/>
            <div className="footer-img">
                <img src={logo} alt="logo" />
            </div>
            <div className="links">
                <ul>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="social-logo">
                <img src={insta} alt="instagram" />
                <img src={pint} alt="Pinterest" />
                <img src={wb} alt="Whatsapp" />
            </div>
            <hr/>
            <div className="copyright">
                <p>CopyRight @{currentYear} - All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
