import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import './Header.css';

function Header() {

    return(
        <>
        <div className = "topBar">
            <div className='leftSection'>
                <h1>Should I Run Today?</h1>
            </div>
            <div className="rightSection">
                <a href="https://github.com/alexusljf" target="_blank">
                <FontAwesomeIcon icon={faSquareGithub} className = "faicon" />
                </a>
            </div>
        </div>
        </>
    )
}
export default Header;