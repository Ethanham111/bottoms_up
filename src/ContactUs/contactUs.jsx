// src/ContactUs/contactUs.jsx
import React from 'react';
import call from '../Images/call.png';
import insta from '../Images/instagram.png';
import email from '../Images/email.png';
import './contactUs.css';
import { useLanguage } from '../Language';

function ContactUs() {
    const { language } = useLanguage();

    return (
        <>
            <h2 id="contactHeader">
                {language === 'EN' ? 'Contact Information' : 'Informations de Contact'}
            </h2>
            <div className="contactsSection" id="contactsSection">
                <div className="callDiv">
                    <img src={call} alt="Phone icon" />
                    <h2 className="callUs">
                        {language === 'EN' ? 'Call' : 'Appelez-nous'}
                    </h2>
                    <a className="phoneNumber" href="tel:438-926-6733">438-926-6733</a>
                </div>
                <div className="emailDiv">
                    <img src={email} alt="Letter icon" />
                    <h2 className="emailUs">
                        {language === 'EN' ? 'Email' : 'Email'}
                    </h2>
                    <a className="email" href="mailto:equipebottomsup@gmail.com">equipebottomsup@gmail.com</a>
                </div>
                <div className="socialDiv">
                    <img id="instaPhoto" src={insta} alt="Instagram icon" />
                    <h2 className="callUs">Instagram</h2>
                    <a className="phoneNumber" href="https://www.instagram.com/bottomsupbar/" target="_blank" rel="noopener noreferrer">@BottomsUp</a>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
