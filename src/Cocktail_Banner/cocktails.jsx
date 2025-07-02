import glasses from "../Images/glass.webp";
import cartoonMartini from "../Images/cartoonMartini.webp";
import cartoonMarg from "../Images/cartoonMarg.webp";
import cartoonHighball from "../Images/cartoonHighball.webp";
import './cocktails.css';

function Cocktail_Banner() {
    return (
        <div id="glassesWrapper">
            <div id="glassesCarousel">
                {/* Pattern 1 */}
                <img className="glassesImg" src={glasses} alt="Cartoon Glass" />
                <img className="cocktailImg" src={cartoonMartini} alt="Cartoon Martini" />
                <img className="cocktailImg" src={cartoonHighball} alt="Cartoon Highball" />
                <img className="cocktailImg" src={cartoonMarg} alt="Cartoon Margarita" />
                
                {/* Pattern 2 (repeat for loop effect) */}
                <img className="glassesImg" src={glasses} alt="Cartoon Glass Repeat" />
                <img className="cocktailImg" src={cartoonMartini} alt="Cartoon Martini Repeat" />
                <img className="cocktailImg" src={cartoonHighball} alt="Cartoon Highball Repeat" />
                <img className="cocktailImg" src={cartoonMarg} alt="Cartoon Margarita Repeat" />

                <img className="glassesImg" src={glasses} alt="Cartoon Glass Repeat" />
                <img className="cocktailImg" src={cartoonMartini} alt="Cartoon Martini Repeat" />
                <img className="cocktailImg" src={cartoonHighball} alt="Cartoon Highball Repeat" />
                <img className="cocktailImg" src={cartoonMarg} alt="Cartoon Margarita Repeat" />

                <img className="glassesImg" src={glasses} alt="Cartoon Glass Repeat" />
                <img className="cocktailImg" src={cartoonMartini} alt="Cartoon Martini Repeat" />
                <img className="cocktailImg" src={cartoonHighball} alt="Cartoon Highball Repeat" />
                <img className="cocktailImg" src={cartoonMarg} alt="Cartoon Margarita Repeat" />

                <img className="glassesImg" src={glasses} alt="Cartoon Glass Repeat" />
                <img className="cocktailImg" src={cartoonMartini} alt="Cartoon Martini Repeat" />
                <img className="cocktailImg" src={cartoonHighball} alt="Cartoon Highball Repeat" />
                <img className="cocktailImg" src={cartoonMarg} alt="Cartoon Margarita Repeat" />
            </div>
        </div>
    );
}

export default Cocktail_Banner;
