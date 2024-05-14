import call from '../Images/call.png'
import insta from '../Images/instagram.png'
import email from '../Images/email.png'
import './contactUs.css'

function ContactUs(){
    return(
    <>
        <h2 id="contactHeader"> Contact Information </h2>
    <div class="contactsSection" id="contactsSection">
        <div class="callDiv" onclick="copyPhoneNumber()">
            <img src={call} alt="Phone icon"/>
            <h2 class="callUs"> Call us </h2>
            <a class="phoneNumber"> 438-926-6733 </a>
        </div>
        <div class="emailDiv" onclick="copyEmailAddress()">
            <img src={email} alt="Letter icon"/>
            <h2 class="emailUs"> Email us</h2>
            <a class="email"> mtlham45@gmail.com </a>
        </div>
        <div class="socialDiv" onclick="redirectToInstagram()">
            <img id='instaPhoto' src={insta} alt="Phone icon"/>
            <h2 class="callUs">Instagram</h2>
            <a class="phoneNumber"> @BottomsUp</a>
        </div>
    </div>
    </>

    );
}

export default ContactUs