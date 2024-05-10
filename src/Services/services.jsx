import shaking from '../Images/shaking.jpg'
import outdoors from '../Images/20230904_184048.jpg'
import indoors from '../Images/20230618_190624.jpg'

import './services.css'

function ServicesContainer() {
    return (
        <>
            <h2 className="hidden" id="serviceHeader">Our Services</h2>
            <div className="servicesText" id="servicesSection">
                <p className="hidden" id="servicesItalics">Professional Event Staffing and Mobile Bar Services</p>
                <p className="hidden" id="servicesParagraph">
                    "Bottoms Up" offers the perfect solution for a wide range of events. Whether you're hosting a relaxed backyard barbecue or an elegant wedding reception, we provide a versatile and stylish bar setup that caters to your specific event needs. We ensure your event is not just an occasion but a lasting memory.
                </p>
            </div>

            <div className="servicesContainer">
                <div className="servicesDivs" id="formalDiv">
                    <div className="overlay-box">
                        <div className="serviceDescription">Formal Events</div>
                    </div>
                    <div className="serviceDescriptionMobile">
                        <span>Formal Events</span>
                    </div>
                    <img className="serviceImg" src={indoors} alt="Indoor venue with made cocktails on display" />
                </div>

                <img id="shaking" src={shaking} alt="Shaking image" />

                <div className="servicesDivs" id="casualDiv">
                    <div className="overlay-box">
                        <div className="serviceDescription">Casual Events</div>
                    </div>
                    <div className="serviceDescriptionMobile">
                        <span>Casual Events</span>
                    </div>
                    <img className="serviceImg" src={outdoors} alt="Outdoor venue with mojito pitcher on display" />
                </div>
            </div>
        </>
    );
}


export default ServicesContainer;