
import { useEffect, useDebugValue } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getUrlForeCastByCity } from '../services/getUrlWeatherbyCity';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';
import { getCityCode } from '../utils/utils';

const useCityPage = (allChartData, allForecastItemList, actions) => {

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
        // onSetCharData({ [cityCode]: dataAux });
        actions({ type: 'SET_CHART_DATA', payload: {[cityCode]: dataAux } })
        
        const forecastItemListAux = getForecastItemList(data);
        actions({ type: 'SET_FORECAST_ITEM_LIST', payload: { [cityCode]: forecastItemListAux }})
        // onSetForecastItemList({ [cityCode]: forecastItemListAux })

      } catch (error) {
        console.error(error.message)
      }
    }

    const cityCode = getCityCode(city, countryCode)
    if (allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
      getForecast();
    }
    
  }, [city, countryCode, actions, allChartData, allForecastItemList])

  return { city, countryCode }
}

export default useCityPage;