import './App.css';
import Weather from "./components/Weather/weather"
import Header from "./components/header/Header"
import checkWeather from './oneWeather/oneWeather';

function App() {
  return (
    <div className="App">
      <Header/>
      <Weather/>
    </div>
  );
}
checkWeather();
export default App;
