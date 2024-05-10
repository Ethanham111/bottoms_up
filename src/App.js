import Header from "./Header/header";
import Footer from './Footer/footer';
import HomeSection from "./Home/homeSection";
import MartiniRow from "./MartiniBanner/martiniRow";
import ServicesContainer from "./Services/services";
import Testimonals from "./Testimonials/testimonials";



function App() {

  return(
    <>
    <Header/>
    <HomeSection/>
    <MartiniRow/>
    <ServicesContainer/>
    <Testimonals/>
    <Footer/>
    </>
  );

}

export default App;
