// src/ContactUs/contactUs.jsx
import React from 'react';
import callIcon from '../Images/call.webp';
import instaIcon from '../Images/instagram.webp';
import emailIcon from '../Images/email.webp';
import './contactUs.css';
import { useLanguage } from '../Language';

const contactData = [
    {
        id: 'call',
        href: 'tel:514-557-0804',
        img: callIcon,
        alt: 'Phone icon',
        labelEN: 'Call',
        labelFR: 'Appelez-nous',
        display: '514-557-0804',
        className: 'phoneNumber',
    },
    {
        id: 'email',
        href: 'mailto:equipe.bottomsup@gmail.com',
        img: emailIcon,
        alt: 'Email icon',
        labelEN: 'Email',
        labelFR: 'Email',
        display: 'equipe.bottomsup@gmail.com',
        className: 'email',
    },
    {
        id: 'instagram',
        href: 'https://www.instagram.com/bottomsupbar/',
        img: instaIcon,
        alt: 'Instagram icon',
        labelEN: 'Instagram',
        labelFR: 'Instagram',
        display: '@BottomsUp',
        className: 'phoneNumber',
        isSocial: true,
    },
];

function ContactCard({ data, language }) {
    const label = language === 'EN' ? data.labelEN : data.labelFR;
    return (
        <article className={`${data.id}Div contactCard`}>
            <a href={data.href} target={data.isSocial ? '_blank' : '_self'} rel="noopener noreferrer">
                <img
                    src={data.img}
                    alt={data.alt}
                    id={data.id === 'instagram' ? 'instaPhoto' : undefined}
                />
            </a>
            <h2 className="contactLabel">{label}</h2>
            <a className={data.className} href={data.href} target={data.isSocial ? '_blank' : '_self'} rel="noopener noreferrer">
                {data.display}
            </a>
        </article>
    );
}

function ContactUs() {
    const { language } = useLanguage();

    return (
        <section id="contactsSection">
            <h2 id="contactHeader">
                {language === 'EN' ? 'Contact' : 'Contact'}
            </h2>
            <div className="contactsSection">
                {contactData.map((item) => (
                    <ContactCard key={item.id} data={item} language={language} />
                ))}
            </div>
        </section>
    );
}

export default ContactUs;
