import React, { useState } from 'react';
import logo from '../Images/blackBottomsLogo.png';
// import martini from '../Images/logoMartini.png';
import './header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('EN');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'FR' : 'EN');
    };

    return (
        <header className="header">
            <nav className="navBar">
                <img id="mainNavImg" src={logo} alt="Main Logo" />
                <div className={`navLinks ${menuOpen ? 'mobile-menu-open' : ''}`}>
                    <a className="navElement" id="homeNav" href="#homeSection">{language === 'EN' ? 'Home' : 'Accueil'}<span className="red-bar"></span></a>
                    <a className="navElement" id="servicesNav" href="#servicesSection">{language === 'EN' ? 'Services' : 'Services'}<span className="red-bar"></span></a>
                    <a className="navElement" id="aboutNav" href="#aboutSection">{language === 'EN' ? 'About' : 'À Propos'}<span className="red-bar"></span></a>
                    <a className="navElement" id="contactNav" href="#contactsSection">{language === 'EN' ? 'Contact' : 'Contact'}<span className="red-bar"></span></a>
                </div>
                <button className="language-button" onClick={toggleLanguage}>
                    {language === 'EN' ? 'Français' : 'English'}
                </button>
            </nav>
        </header>
    );
}

export default Header;

