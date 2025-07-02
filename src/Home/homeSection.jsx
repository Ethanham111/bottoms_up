import React from 'react';
import banner1 from '../Images/shakers_50.jpg';
import banner2 from '../Images/bev_50.jpg';
import banner3 from '../Images/IMG_4858_50.jpg';
import banner4 from '../Images/IMG_4860_50.jpg';
import './homeSection.css';

function HomeSection() {
    return (
        <div className="homeSection" id="homeSection">
            <div id="homeSlogan">
                Sip Savor Celebrate
            </div>
            <div className="imagesContainer">
                <img className="homeimgs" src={banner1} alt="Drinks Lined up on Bar" />
                <img className="homeimgs" src={banner2} alt="Backyard Display of Drinks" />
                <img className="homeimgs" src={banner3} alt="People enjoying drinks" />
                <img className="homeimgs" src={banner4} alt="Cocktails close-up" />
            </div>
        </div>
    );
}

export default HomeSection;
