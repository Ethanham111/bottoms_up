
import glasses from "../Images/glass.png";
import cartoonMartini from "../Images/cartoonMartini.png"
import cartoonMarg from "../Images/cartoonMarg.png"
import cartoonMoscow from "../Images/cartoonMoscow.png"
import './martiniRow.css'

function MartiniRow() {
    return (
        <div id="glassesContainer">
            <img className="glasses" src={glasses} alt="Cartoon Glass Image 1" />
            <img className="martinis" src={cartoonMartini} alt="Cartoon Martini Image 2" />
            <img className="martinis" src={cartoonMoscow} alt="Cartoon Moscow Image 3" />
            <img className="martinis" src={cartoonMarg} alt="Cartoon Glass Image 4" />
            <img className="martinis" src={cartoonMartini} alt="Cartoon Martini Image 4" />
            <img className="martinis" src={cartoonMoscow} alt="Cartoon Margarita Image 4" />
            <img className="martinis" src={cartoonMarg} alt="Cartoon Margarita Image 4" />
            <img className="glasses" src={glasses} alt="Cartoon Margarita Image 4" />
        </div>
    );
}

export default MartiniRow;
