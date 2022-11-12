
import { useEffect, useDebugValue } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getUrlForeCastByCity } from '../services/getUrlWeatherbyCity';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';

const useCityPage = (onSetCharData, onSetForecastItemList) => {

  const { city, countryCode } = useParams();

  // Only use for debuging
  useDebugValue(`city ${city}`)

  useEffect(() => {

    const getForecast = async () => {
      const url = getUrlForeCastByCity(city, countryCode);
      try {
        const { data } = await axios.get(url);
        const dataAux = getChartData(data);
        onSetCharData(dataAux);
        
        const forecastItemListAux = getForecastItemList(data);
        onSetForecastItemList(forecastItemListAux)

      } catch (error) {
        console.error(error.message)
      }
    }

    getForecast();
    
  }, [city, countryCode, onSetCharData, onSetForecastItemList])

  return { city, countryCode }
}

export default useCityPage;