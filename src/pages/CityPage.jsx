import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CityInfo from '../components/CytiInfo/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/ForeCast';
import ForecastChart from '../components/ForecastChart';
import AppFrame from '../components/AppFrame';
import { getUrlForeCastByCity } from '../services/getUrlWeatherbyCity';

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
  { hour: 14, state: 'rain', temperature: 7, weekDay: 'Jueves' },
  { hour: 3, state: 'clear', temperature: 15, weekDay: 'Viernes' },
  { hour: 9, state: 'thunderstorm', temperature: 13, weekDay: 'Sabado' },
  { hour: 11, state: 'clouds', temperature: 10, weekDay: 'Domingo' },
  { hour: 13, state: 'drizzle', temperature: 30, weekDay: 'Lunes' }
]



const CityPage = () => {
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams();
  
  const country = 'México';
  const state = 'clear';
  const temperature = 26;
  const humidity = 80;
  const wind = 10;
  // const data = dataExample;
  // const forecastItemList = forecastItemListExample;

  useEffect(() => {

    const getForecast = async () => {
      const url = getUrlForeCastByCity(city, countryCode);
      try {
        const { data } = await axios.get(url)

        console.log('data from server => ', data);

        setData(dataExample);
        setForecastItemList(forecastItemListExample)
      } catch (error) {
        console.error(error.message)
      }
    }

    getForecast();
    
  }, [city, countryCode])
  

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
            data && <ForecastChart data={data} />
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