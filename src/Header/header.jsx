// src/Header/header.jsx
import React, { useState } from 'react';
import logo from '../Images/blackBottomsLogo.png';
import './header.css';
import { useLanguage } from '../Language';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();


    return (
        <header className="header">
            <nav className="navBar">
                <img id="mainNavImg" src={logo} alt="Main Logo" />
                <div className={`navLinks ${menuOpen ? 'mobile-menu-open' : ''}`}>
                    <a className="navElement" id="homeNav" href="#homeSection">
                        {language === 'EN' ? 'Home' : 'Accueil'}
                        <span className="red-bar"></span>
                    </a>
                    <a className="navElement" id="servicesNav" href="#servicesSection">
                        {language === 'EN' ? 'Services' : 'Services'}
                        <span className="red-bar"></span>
                    </a>
                    <a className="navElement" id="aboutNav" href="#aboutSection">
                        {language === 'EN' ? 'About' : 'À Propos'}
                        <span className="red-bar"></span>
                    </a>
                    <a className="navElement" id="contactNav" href="#contactsSection">
                        {language === 'EN' ? 'Contact' : 'Contact'}
                        <span className="red-bar"></span>
                    </a>
                </div>
                <button className="language-button" onClick={toggleLanguage}>
                    {language === 'EN' ? 'FR' : 'EN'}
                </button>
            </nav>
        </header>
    );
}

export default Header;


