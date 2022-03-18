import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUrlWeatherByCityAndCountryCode } from './../services/getUrlWeatherbyCity';
import { getCityCode } from './../utils/utils';
import { toCelsius } from '../utils/utils'

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  /*
    allWeather = {
      'Ciudad de México-MX': {},
      'Madrid-ES': {},
      'Buenos Aires-AR': {},
      'Bogota-CO': {}
    }
  */

  useEffect(() => {
    if (allWeather['Ciudad de México-México']) return;
    const setWeather = async (city, countryCode) => {
      try {
        const url = getUrlWeatherByCityAndCountryCode(city, countryCode)
        const response = await axios.get(url)
        const { data } = response;
        const temperature = toCelsius(data.main.temp)
        const state = data.weather[0].main.toLowerCase();
        setAllWeather(allWeather => ({ ...allWeather, [`${getCityCode(city, countryCode)}`]: { temperature, state } }))
      } catch(err) {
        if (err.response) {
          setError('Error en el servidor');
        } else if (err.request) { // Errores que no llegan al server
          setError('Server inaccesible o sin internet');
        } else { // Errores inesperados
          setError('Error inesperado');
        }
      }
    }
    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities])

  return {allWeather, error, setError}
}

export default useCityList;