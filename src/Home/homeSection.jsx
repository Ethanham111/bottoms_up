// src/Home/homeSection.jsx
import React from 'react';
import banner1 from '../Images/bannerLeft.jpg';
import banner2 from '../Images/bannerRight.jpg';
import './homeSection.css';

function HomeSection() {
    return (
        <div className="homeSection" id="homeSection">
            <div id="homeSlogan">
                Sip Savor Celebrate
            </div>
            <div className="imagesContainer">
                <img className="homeimgs" id="homeimg1" src={banner1} alt="Drinks Lined up on Bar" />
                <img className="homeimgs" id="homeimg2" src={banner2} alt="Backyard Display of Drinks" />
            </div>
        </div>
    );
}

export default HomeSection;
