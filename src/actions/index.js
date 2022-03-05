import { getUrlForeCastByCity, getUrlWeatherByCity } from '../services/getUrlWeatherbyCity';
import { transformForecast } from '../services/transformForeCast';
import transformWeather from '../services/transformWeather';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = value => ({type: SET_CITY, value});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {

  return async (dispatch, getState) => {
    const url_forecast = getUrlForeCastByCity(payload);

    dispatch(setCity(payload));
    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forcastDataDate;
    const now = new Date();
    if (date && now - date < (1 * 60 * 1000) ) return; // Improve performance. With this the app makes the fetch after one minute
    const data = await fetch(url_forecast);
    const weather_data = await data.json();
    const forecastData = transformForecast(weather_data);
    dispatch(setForecastData({ city: payload, forecastData }));
  };
};

export const setWeather = payload => {

  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const api_weather = getUrlWeatherByCity(city);
      fetch(api_weather)
        .then(res => {
            return res.json();
        }).then(weather_data => {
            const weather = transformWeather(weather_data);
            
            dispatch(setWeatherCity({ city, weather }));
        })
        .catch(err => {
            console.error(err);
        })
    })
  }


}