
import glasses from "../Images/glass.webp";
import cartoonMartini from "../Images/cartoonMartini.webp"
import cartoonMarg from "../Images/cartoonMarg.webp"
import cartoonHighball from "../Images/cartoonHighball.webp"
import './cocktails.css'

function Cocktail_Banner() {
    return (
        <div id="glassesContainer">
            <img className="glasses" src={glasses} alt="Cartoon Glass Image 1" />
            <img className="martinis" src={cartoonMartini} alt="Cartoon Martini Image 2" />
            <img className="martinis" src={cartoonHighball} alt="Cartoon Moscow Image 3" />
            <img className="martinis" src={cartoonMarg} alt="Cartoon Glass Image 4" />
            <img className="martinis" src={cartoonMartini} alt="Cartoon Martini Image 4" />
            <img className="martinis" src={cartoonHighball} alt="Cartoon Margarita Image 4" />
            <img className="martinis" src={cartoonMarg} alt="Cartoon Margarita Image 4" />
            <img className="glasses" src={glasses} alt="Cartoon Margarita Image 4" />
        </div>
    );
}

export default Cocktail_Banner;
