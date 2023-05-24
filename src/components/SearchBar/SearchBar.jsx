import './SearchBar.css';
import checkWeather from "../../oneWeather/oneWeather";

const SearchBar = () => {
    return (
        <div className = 'search'>
        <input type="text" placeholder = "Not in Singapore? Enter your City here!" className='searchBar'/>
        <button className='searchButton'> Enter </button>
        </div>
    )
}


export default SearchBar;