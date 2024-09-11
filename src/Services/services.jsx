import React from 'react';
import shaking from '../Images/shaking.webp';
import casual from '../Images/casual.webp';
import formal from '../Images/formal.webp';
import './services.css';
import { useLanguage } from '../Language';
import useIntersectionObserver from '../observer';

function ServicesContainer() {
    const { language } = useLanguage();
    const elementsRef = useIntersectionObserver({ threshold: 0.5 });

    return (
        <>
        <div className='servicesWrapper'>
            <a id="servicesSection"></a>
            <h2 ref={(el) => elementsRef.current.push(el)} className="hidden" id="serviceHeader">
                {language === 'EN' ? 'Our Bar Services' : 'Nos Services de Bar'}
            </h2>
            <div className="servicesText">
                <p ref={(el) => elementsRef.current.push(el)} className="hidden" id="servicesItalics">
                    {language === 'EN' ? 
                        'Professional Bar Services for Weddings, Events, and Private Parties in Montreal' : 
                        'Services de Bar Professionnels pour Mariages, Événements et Fêtes Privées à Montréal'}
                </p>
                <p ref={(el) => elementsRef.current.push(el)} className="hidden" id="servicesParagraph">
                    {language === 'EN'
                        ? 'At "Bottoms Up", we provide exceptional bar services tailored to your event in Montreal. Whether you are hosting a wedding, a private party, or a corporate event, our mobile bar services offer the perfect solution. Our experienced staff ensures a seamless and stylish bar experience that will make your event memorable.'
                        : 'Chez "Bottoms Up", nous offrons des services de bar exceptionnels adaptés à votre événement à Montréal. Que vous organisiez un mariage, une fête privée ou un événement professionnel, nos services de bar mobile offrent la solution parfaite. Notre personnel expérimenté assure une expérience de bar fluide et élégante qui rendra votre événement inoubliable.'}
                </p>
            </div>

            <div className="servicesContainer">
                <div className="servicesDivs" id="formalDiv">
                    <div className="overlay-box">
                        <div ref={(el) => elementsRef.current.push(el)} className="serviceDescription">
                            {language === 'EN' ? 'Formal Events' : 'Événements Formels'}
                        </div>
                    </div>
                    <div className="serviceDescriptionMobile">
                        <span>{language === 'EN' ? 'Formal Events' : 'Événements Formels'}</span>
                    </div>
                    <img 
                        className="serviceImg" 
                        src={formal} 
                        alt="Bar setup for formal events in Montreal" 
                    />
                </div>

                <img 
                    id="shaking" 
                    src={shaking} 
                    alt="Bartender shaking cocktails at a party in Montreal" 
                />

                <div className="servicesDivs" id="casualDiv">
                    <div className="overlay-box">
                        <div ref={(el) => elementsRef.current.push(el)} className="serviceDescription">
                            {language === 'EN' ? 'Casual Events' : 'Événements Décontractés'}
                        </div>
                    </div>
                    <div className="serviceDescriptionMobile">
                        <span>{language === 'EN' ? 'Casual Events' : 'Événements Décontractés'}</span>
                    </div>
                    <img 
                        className="serviceImg" 
                        src={casual} 
                        alt="Casual outdoor bar setup for parties in Montreal" 
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default ServicesContainer;
