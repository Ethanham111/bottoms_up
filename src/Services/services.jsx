import React, { useCallback } from 'react';
import casual from '../Images/casual.jpg';
import formal from '../Images/formal.jpg';
import './services.css';
import { useLanguage } from '../Language';
import useIntersectionObserver from '../observer';

function ServicesContainer() {
    const { language } = useLanguage();
    const elementsRef = useIntersectionObserver({ threshold: 0.5 });

    const registerElement = useCallback((el) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    }, [elementsRef]);

    return (
        <section className="servicesSection">
            <div className="servicesWrapper">
                <div className="servicesTextColumn">
                    <h2 ref={registerElement} className="serviceHeading hidden">
                        {language === 'EN' ? 'Our Bar Services' : 'Nos Services de Bar'}
                    </h2>
                    <p ref={registerElement} className="serviceSubheading hidden">
                        {language === 'EN'
                            ? 'Professional Bar Services for Weddings, Events, and Private Parties in Montreal'
                            : 'Services de Bar Professionnels pour Mariages, Événements et Fêtes Privées à Montréal'}
                    </p>
                    <p ref={registerElement} className="serviceParagraph hidden">
                        {language === 'EN'
                            ? 'At "Bottoms Up", we provide exceptional bar services tailored to your event in Montreal. Whether you are hosting a wedding, a private party, or a corporate event, our mobile bar services offer the perfect solution. Our experienced staff ensures a seamless and stylish bar experience that will make your event memorable.'
                            : 'Chez "Bottoms Up", nous offrons des services de bar exceptionnels adaptés à votre événement à Montréal. Que vous organisiez un mariage, une fête privée ou un événement professionnel, nos services de bar mobile offrent la solution parfaite. Notre personnel expérimenté assure une expérience de bar fluide et élégante qui rendra votre événement inoubliable.'}
                    </p>
                </div>

                <div className="servicesImageColumn">
                    <img className="serviceImgBox" src={formal} alt="Formal bar setup" />
                    <img className="serviceImgBox secondImage" src={casual} alt="Casual bar setup" />
                </div>
            </div>
        </section>
    );
}

export default ServicesContainer;
