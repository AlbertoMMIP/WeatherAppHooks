import React from 'react';
import { Grid } from '@mui/material';
import CityInfo from '../components/CytiInfo/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/ForeCast';
import ForecastChart from '../components/ForecastChart';

const dataExample = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

const forecastItemListExample = [
  { hour: 18, state: 'cloud', temperature: 9, weekDay: 'Martes' },
  { hour: 10, state: 'fog', temperature: 5, weekDay: 'Miercoles' },
  { hour: 14, state: 'rain', temperature: 7, weekDay: 'Jueves' },
  { hour: 3, state: 'sunny', temperature: 15, weekDay: 'Viernes' },
  { hour: 9, state: 'fog', temperature: 13, weekDay: 'Sabado' },
  { hour: 11, state: 'cloudy', temperature: 10, weekDay: 'Domingo' },
  { hour: 13, state: 'sunny', temperature: 30, weekDay: 'Lunes' }
]

const CityPage = () => {
  const city = 'CDMX';
  const country = 'México';
  const state = 'sunny';
  const temperature = 26;
  const humidity = 80;
  const wind = 10;
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

  return (
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
        <ForecastChart data={data} />
      </Grid>
      <Grid item>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  )
}

export default CityPage;