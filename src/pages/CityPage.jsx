import React, { useMemo } from 'react';
import { Grid, LinearProgress } from '@mui/material';
import 'moment/locale/es-mx';
import CityInfo from '../components/CytiInfo/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/ForeCast';
import ForecastChart from '../components/ForecastChart';
import AppFrame from '../components/AppFrame';
import useCityPage from './../hooks/useCityPage';
import useCityList from '../hooks/useCityList';
import { getCityCode } from '../utils/utils';
import { getCountryName } from '../services/cities';


const CityPage = ({ data, actions }) => {
  const { allWeather, allChartData, allForecastItemList } = data
  const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions

  const { city, countryCode } = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList);

  const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode]);
  
  useCityList(cities, allWeather, onSetAllWeather);
  const cityCode = getCityCode(city, countryCode);

  const weather = allWeather && allWeather[cityCode];
  const chartData = allChartData[cityCode];
  const forecastItemList = allForecastItemList[cityCode];

  const country = countryCode && getCountryName(countryCode);
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;
  const state = weather && weather.state;
  const temperature = weather && weather.temperature;

  return (
    <AppFrame>
      <Grid container
        justifyContent='space-around'
        direction='column'
        spacing={2}>
        <Grid item container
          justifyContent='center'
          alignItems='flex-end'>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12}
          justifyContent='center'>
          <Weather state={state} temperature={temperature} />
          {
            humidity && wind &&
            <WeatherDetails humidity={humidity} wind={wind} />
          }
        </Grid>
        <Grid item>
        {
          !chartData && !forecastItemList && <LinearProgress />
        }
        </Grid>
        <Grid item>
          {
            chartData && <ForecastChart data={chartData} />
          }
        </Grid>
        <Grid item>
          {
            forecastItemList && <Forecast forecastItemList={forecastItemList} />
          }
        </Grid>
      </Grid>
    </AppFrame>
    
  )
}

export default CityPage;