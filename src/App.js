import Header from "./Header/header";
import Footer from './Footer/footer';
import HomeSection from "./Home/homeSection";
import MartiniRow from "./MartiniBanner/martiniRow";
import ServicesContainer from "./Services/services";
import Testimonals from "./Testimonials/testimonials";
import AboutUs from "./AboutUs/aboutUs";
import ContactUs from "./ContactUs/contactUs";
import { LanguageProvider } from './Language';

function App() {

  return(
    <LanguageProvider>
      <Header/>
      <HomeSection/>
      <MartiniRow/>
      <ServicesContainer/>
      <Testimonals/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </LanguageProvider>
  );

}

export default App;
