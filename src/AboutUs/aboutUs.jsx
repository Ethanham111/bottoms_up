import founders from '../Images/FoundersPic.JPG'
import './aboutUs.css'

function AboutUs(){
    return(
        <>

        <h2 id="aboutSection" class="aboutUsHeader"> About us </h2>
        <div class="aboutSection">
            <img class="foundersPic" src={founders} alt="Picture of the Founders"/>
            <p id="aboutDescription">
                Following in the footsteps of our fathers, we are two cousins who created a unique bar experience by
                combining tradition with innovation.
                We ensure to provide guests with extraordinary cocktails and exceptional service.
                Cheers to family, friends, and unforgettable events!
            </p>
        </div>
        </>
    );
}

export default AboutUs