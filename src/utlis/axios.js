import axios from 'axios';

export const getWeather = (city) => {
    return axios(`https://jr-weather-api.herokuapp.com/api/weather?city=${city}&cc=au`);
};