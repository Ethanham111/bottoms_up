import banner1 from "../Images/bannerLeft.jpg"
import banner2 from "../Images/bannerRight.jpg"
import './homeSection.css'

function HomeSection() {

    return (
        <div className="HomeSection" id="homeSection">
            <img className="homeimgs" id="homeimg1" src={banner1} alt="Drinks Lined up on Bar" />
            <img className="homeimgs" id="homeimg2" src={banner2} alt="Backyard Display of Drinks" />
            <span id="homeSlogan"> Sip, Savor, Celebrate! </span>
        </div>
    );
}

export default HomeSection;
