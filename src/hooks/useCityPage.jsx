
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getUrlForeCastByCity } from '../services/getUrlWeatherbyCity';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';

const useCityPage = () => {
  const [charData, setCharData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams();

  useEffect(() => {

    const getForecast = async () => {
      const url = getUrlForeCastByCity(city, countryCode);
      try {
        const { data } = await axios.get(url);
        const dataAux = getChartData(data);
        setCharData(dataAux);
        
        const forecastItemListAux = getForecastItemList(data);
        setForecastItemList(forecastItemListAux)

      } catch (error) {
        console.error(error.message)
      }
    }

    getForecast();
    
  }, [city, countryCode])

  return { city, charData, forecastItemList}
}

export default useCityPage;