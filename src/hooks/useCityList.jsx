import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUrlWeatherByCityAndCountryCode } from './../services/getUrlWeatherbyCity';
import getAllWeather from '../utils/transform/getAllWeather';
import { getCityCode } from '../utils/utils';

const useCityList = (cities, allWeather, actions) => {
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
    const setWeather = async (city, countryCode) => {
      try {
        const propName = getCityCode(city, countryCode)
        // onSetAllWeather({ [propName]: {} })
        actions({ type: 'SET_ALL_WEATHER', payload: { [propName]: {} } })
        const url = getUrlWeatherByCityAndCountryCode(city, countryCode)
        const response = await axios.get(url)
        const allWeatherAux = getAllWeather(response, city, countryCode);
        actions({ type: 'SET_ALL_WEATHER', payload: allWeatherAux })
        // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
        // onSetAllWeather(allWeatherAux);

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
      if (!allWeather[getCityCode(city, countryCode)]) {
        setWeather(city, countryCode);
      }
    });
  }, [cities, actions, allWeather])

  return {error, setError}
}

export default useCityList;