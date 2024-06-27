import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './testimonials.css'; 

function Testimonals() {
    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 'auto',
            speed: 8500,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            }
        });

        // Function to advance Swiper slides at regular intervals
        const advanceSlides = () => {
            mySwiper.slideNext(); // Advance to the next slide
        };

        // Set an interval to call advanceSlides function every 5 seconds
        const intervalId = setInterval(advanceSlides, 5000);

        // Clean up Swiper instance and interval on component unmount
        return () => {
            mySwiper.destroy();
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className="TestimonalsContainer">
            <div className="Testimonals">
                <p id="testHeader">Testimonals</p>
                <div className="swiper-container swiper-no-swiping">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <p className="comments">"Best bar service. Recommended !!!!!"<br/><span className="testimonial-author">-Naomi</span></p>
                        </div>
                        <div className="swiper-slide">
                            <p className="comments">"BEST BAR SERVICE EVER!!!"<br/><span className="testimonial-author">-Sabrina</span></p>
                        </div>
                        <div className="swiper-slide">
                            <p className="comments">"Terrific bar service 👏"<br/><span className="testimonial-author">-Phillipe</span></p>
                        </div>
                        <div className="swiper-slide">
                            <p className="comments">"Used bottoms up bar service for my birthday party. They made amazing cocktails..."<br/><span className="testimonial-author">-Alicia</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonals;
