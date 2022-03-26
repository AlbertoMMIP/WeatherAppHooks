import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUrlWeatherByCityAndCountryCode } from './../services/getUrlWeatherbyCity';
import getAllWeather from '../utils/transform/getAllWeather';

const useCityList = (cities, onSetAllWeather) => {
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
        const url = getUrlWeatherByCityAndCountryCode(city, countryCode)
        const response = await axios.get(url)
        const allWeatherAux = getAllWeather(response, city, countryCode);
        // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
        onSetAllWeather(allWeatherAux);

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
  }, [cities, onSetAllWeather])

  return {error, setError}
}

export default useCityList;