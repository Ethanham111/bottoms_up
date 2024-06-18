import founders from '../Images/FoundersPic.JPG'
import './aboutUs.css'
import { useLanguage } from '../Language';

function AboutUs(){

    const { language } = useLanguage();

    return (
        <>
            <h2 id="aboutSection" className="aboutUsHeader">
                {language === 'EN' ? 'About us' : 'À Propos'}
            </h2>
            <div className="aboutSection">
                <img className="foundersPic" src={founders} alt="Picture of the Founders" />
                <p id="aboutDescription">
                    {language === 'EN'
                        ? 'Following in the footsteps of our fathers, we are two cousins who created a unique bar experience by combining tradition with innovation. We ensure to provide guests with extraordinary cocktails and exceptional service. Cheers to family, friends, and unforgettable events!'
                        : 'Suivant les traces de nos pères, nous sommes deux cousins qui ont créé une expérience de bar unique en combinant tradition et innovation. Nous nous assurons de fournir à nos invités des cocktails extraordinaires et un service exceptionnel. Santé à la famille, aux amis et aux événements inoubliables !'}
                </p>
            </div>
        </>
    );
}

export default AboutUs