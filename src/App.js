import './App.css';
 import {useState} from 'react'
 import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastChart from './components/ForecastChart';
import { fetchWeather, fetchForecast } from './wheatherService';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleSearch = async (location) => {
      const weatherres = await fetchWeather(location)
      setCurrentWeather(weatherres.data)

      const forecastres = await fetchForecast(location)
      setForecast(forecastres.data)
  }

  return(
    <div>
      <SearchBar onSearch={handleSearch}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <ForecastChart data={forecast}/>}
    </div>
  )
  
}

export default App;
