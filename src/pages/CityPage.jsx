import React from 'react';
import { Grid } from '@mui/material';
import 'moment/locale/es-mx';
import CityInfo from '../components/CytiInfo/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/ForeCast';
import ForecastChart from '../components/ForecastChart';
import AppFrame from '../components/AppFrame';
import useCityPage from './../hooks/useCityPage';

const CityPage = () => {  
  const { city, charData, forecastItemList} = useCityPage();

  const country = 'México';
  const state = 'clear';
  const temperature = 26;
  const humidity = 80;
  const wind = 10;

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
          <WeatherDetails humidity={humidity} wind={wind} />
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