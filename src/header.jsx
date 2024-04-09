import logo from "./Images/BOTTOMS UP OG.png"
import martini from "./Images/BOTTOMS UP Martini1.png"

function Header() {

    return (
        <header>
            <nav className="navBar">
                <img id="mainNavImg" src={logo} alt="Main Logo" />
                <div className="navLinks">
                    <a className="navElement" id="homeNav" href="#homeSection">Home<span className="red-bar"></span></a>
                    <a className="navElement" id="servicesNav" href="#servicesSection">Services<span className="red-bar"></span></a>
                    <a className="navElement" id="aboutNav" href="#aboutSection">About<span className="red-bar"></span></a>
                    <a className="navElement" id="contactNav" href="#contactsSection">Contact<span className="red-bar"></span></a>
                </div>
                <div className="mobile-menu-icon">
                    <img id="martiniImage" src={martini} alt="Dropdown Icon" />
                </div>
            </nav>
        </header>
    );
}

export default Header;
