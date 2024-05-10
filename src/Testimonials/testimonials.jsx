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
        <div class="TestimonalsContainer">
        <div class="Testimonals">
            <p id="testHeader">Testimonals </p>
            <div class="swiper-container swiper-no-swiping">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <p class="comments">"Best bar service. Recommended !!!!!"</p>
                        <p class="testimonial-author">-Naomi</p>
                    </div>
                    <div class="swiper-slide">
                        <p class="comments">"BEST BAR SERVICE EVER!!! Your team went above and beyond to ensure that my engagement party
                            was a blast!"</p>
                        <p class="testimonial-author"> -Sabrina</p>
                    </div>

                    <div class="swiper-slide">
                        <p class="comments">"Terrific bar service 👏"</p>
                        <p class="testimonial-author"> -Phillipe</p>
                    </div>

                    <div class="swiper-slide">
                        <p class="comments">"Used bottoms up bar service for my birthday party. They made amazing cocktails and were
                            super professional."</p>
                        <p class="testimonial-author"> -Alicia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Testimonals;
