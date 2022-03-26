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

const CityPage = ({ allWeather, onSetAllWeather  }) => {  
  const { city, charData, forecastItemList, countryCode } = useCityPage();

  const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode]);

  useCityList(cities, onSetAllWeather)

  const weather = allWeather && allWeather[getCityCode(city, countryCode)]
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
          !charData && !forecastItemList && <LinearProgress />
        }
        </Grid>
        <Grid item>
          {
            charData && <ForecastChart data={charData} />
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