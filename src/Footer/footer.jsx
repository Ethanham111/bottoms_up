
import "./footer.css"
function Footer(){

    return(

        <footer>
            <div id="Copyright">
                <p>&copy; {new Date().getFullYear()} Bottoms' up bar service. all rights reserved.</p>
            </div>
            <div id="websiteDev">
                <p>Created by Ethan Hamburg </p>
            </div>  
        </footer>
    );

}

export default Footer