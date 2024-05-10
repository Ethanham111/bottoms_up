
import martinis from "../Images/cartoonMartinis.png";
import './martiniRow.css'

function MartiniRow() {
    return (
        <div id="glassesContainer">
            <img className="martiniRow" src={martinis} alt="Cartoon Martini Image 1" />
            <img className="martiniRow" src={martinis} alt="Cartoon Martini Image 2" />
            <img className="martiniRow" src={martinis} alt="Cartoon Martini Image 3" />
            <img className="martiniRow" src={martinis} alt="Cartoon Martini Image 4" />
        </div>
    );
}

export default MartiniRow;
