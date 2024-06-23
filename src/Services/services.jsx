
import React from 'react';
import shaking from '../Images/shaking.jpg';
import casual from '../Images/casual.jpg';
import formal from '../Images/formal.jpg';
import './services.css';
import { useLanguage } from '../Language';
import useIntersectionObserver from '../observer';

function ServicesContainer() {
    const { language } = useLanguage();
    const elementsRef = useIntersectionObserver({ threshold: 0.5 });

    return (
        <>
        <div className = 'servicesWrapper'>
            <a id="servicesSection"> </a>
            <h2 ref={(el) => elementsRef.current.push(el)} className="hidden" id="serviceHeader">
                {language === 'EN' ? 'Our Services' : 'Nos Services'}
            </h2>
            <div className="servicesText">
                <p ref={(el) => elementsRef.current.push(el)} className="hidden" id="servicesItalics">
                    {language === 'EN' ? 'Professional Event Staffing and Mobile Bar Services' : 'Services de personnel d\'événement professionnel et de bar mobile'}
                </p>
                <p ref={(el) => elementsRef.current.push(el)} className="hidden" id="servicesParagraph">
                    {language === 'EN'
                        ? '"Bottoms Up" offers the perfect solution for a wide range of events. Whether you\'re hosting a relaxed backyard barbecue or an elegant wedding reception, we provide a versatile and stylish bar setup that caters to your specific event needs. We ensure your event is not just an occasion but a lasting memory.'
                        : '"Bottoms Up" offre la solution parfaite pour une large gamme d\'événements. Que vous organisiez un barbecue décontracté dans votre jardin ou une réception de mariage élégante, nous proposons une installation de bar polyvalente et élégante qui répond à vos besoins spécifiques. Nous veillons à ce que votre événement ne soit pas seulement une occasion, mais un souvenir durable.'}
                </p>
            </div>

            <div className="servicesContainer">
                <div className="servicesDivs" id="formalDiv">
                    <div className="overlay-box">
                        <div ref={(el) => elementsRef.current.push(el)} className="serviceDescription">
                            {language === 'EN' ? 'Formal Events' : 'Formal Events'}
                        </div>
                    </div>
                    <div className="serviceDescriptionMobile">
                        <span>{language === 'EN' ? 'Formal Events' : 'Formal Events'}</span>
                    </div>
                    <img className="serviceImg" src={formal} alt="Indoor venue with made cocktails on display" />
                </div>

                <img id="shaking" src={shaking} alt="Shaking image" />

                <div className="servicesDivs" id="casualDiv">
                    <div className="overlay-box">
                        <div ref={(el) => elementsRef.current.push(el)} className="serviceDescription">
                            {language === 'EN' ? 'Casual Events' : 'Casual Events'}
                        </div>
                    </div>
                    <div className="serviceDescriptionMobile">
                        <span>{language === 'EN' ? 'Casual Events' : 'Casual Events'}</span>
                    </div>
                    <img className="serviceImg" src={casual} alt="Outdoor venue with mojito pitcher on display" />
                </div>
            </div>
        </div>
        </>
    );
}

export default ServicesContainer;
