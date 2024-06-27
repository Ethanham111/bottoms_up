import React, { useState } from 'react';
import logo from '../Images/blackBottomsLogo.png';
import './header.css';
import { useLanguage } from '../Language';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="navBar">
                <img id="mainNavImg" src={logo} alt="Main Logo" />
                <div className={`navLinks ${menuOpen ? 'mobile-menu-open' : ''}`}>
                    <a className="navElement" id="homeNav" href="#homeSection" onClick={handleMenuItemClick}>
                        {language === 'EN' ? 'Home' : 'Accueil'}
                        <span className="red-bar"></span>
                    </a>
                    <a className="navElement" id="servicesNav" href="#servicesSection" onClick={handleMenuItemClick}>
                        {language === 'EN' ? 'Services' : 'Services'}
                        <span className="red-bar"></span>
                    </a>
                    <a className="navElement" id="aboutNav" href="#aboutSection" onClick={handleMenuItemClick}>
                        {language === 'EN' ? 'About' : 'À Propos'}
                        <span className="red-bar"></span>
                    </a>
                    <a className="navElement" id="contactNav" href="#contactsSection" onClick={handleMenuItemClick}>
                        {language === 'EN' ? 'Contact' : 'Contact'}
                        <span className="red-bar"></span>
                    </a>
                    <button className="language-button" onClick={toggleLanguage}>
                        {language === 'EN' ? 'FR' : 'EN'}
                    </button>
                    <button className={`close-button ${menuOpen ? 'visible' : ''}`} onClick={handleMenuItemClick}>
                        &times;
                    </button>
                </div>
                <button className="dropdown-button" onClick={handleMenuToggle}>
                    &#9776;
                </button>
            </nav>
        </header>
    );
}

export default Header;
