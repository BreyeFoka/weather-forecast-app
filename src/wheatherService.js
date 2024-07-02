import axios from 'axios';

const API_KEY = process.env.APIKEY; // Make sure this matches your environment variable name
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (location) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/weather`, {
            params: {
                q: location,
                units: 'metric',
                appid: API_KEY,
            },
        });
        return data; // Return the data here
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null; // Return null or handle the error appropriately
    }
};

export const fetchForecast = async (location) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/forecast`, {
            params: {
                q: location,
                units: 'metric',
                appid: API_KEY,
            },
        });
        return data; // Return the data here
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        return null; // Return null or handle the error appropriately
    }
};
