
import { useEffect, useDebugValue } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getUrlForeCastByCity } from '../services/getUrlWeatherbyCity';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';
import { getCityCode } from '../utils/utils';

const useCityPage = (allChartData, allForecastItemList, onSetCharData, onSetForecastItemList) => {

  const { city, countryCode } = useParams();

  // Only use for debuging
  useDebugValue(`city ${city}`)

  useEffect(() => {

    const getForecast = async () => {
      const url = getUrlForeCastByCity(city, countryCode);
      const cityCode = getCityCode(city, countryCode)
      try {
        const { data } = await axios.get(url);
        const dataAux = getChartData(data);
        onSetCharData({ [cityCode]: dataAux });
        
        const forecastItemListAux = getForecastItemList(data);
        onSetForecastItemList({ [cityCode]: forecastItemListAux })

      } catch (error) {
        console.error(error.message)
      }
    }

    const cityCode = getCityCode(city, countryCode)
    if (allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
      getForecast();
    }
    
  }, [city, countryCode, onSetCharData, onSetForecastItemList, allChartData, allForecastItemList])

  return { city, countryCode }
}

export default useCityPage;