import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es-mx';
import convertUnits from 'convert-units';
import CityInfo from '../components/CytiInfo/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import Forecast from '../components/ForeCast';
import ForecastChart from '../components/ForecastChart';
import AppFrame from '../components/AppFrame';
import { getUrlForeCastByCity } from '../services/getUrlWeatherbyCity';


const useCityPage = () => {
  const [charData, setCharData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams();

  useEffect(() => {

    const getForecast = async () => {
      const url = getUrlForeCastByCity(city, countryCode);
      try {
        const { data } = await axios.get(url)

        const toCelsius = (temp) => Number(convertUnits(temp).from('K').to('C').toFixed(0))
          
        const daysAhead = [0, 1, 2, 3, 4, 5];
        const days = daysAhead.map(day => moment().add(day, 'd'))
        const dataAux = days.map((day, indx) => {
          const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
          })
          const temps = tempObjArray.map(item => item.main.temp)
          const min = Math.min(...temps)
          const max = Math.max(...temps)
          return {
            dayName: day.format('ddd'),
            min: toCelsius(min),
            max: toCelsius(max),
            hasTemps: temps.length > 0 ? true : false
          }
        }).filter(item => item.hasTemps)
        setCharData(dataAux);
        const interval = [4, 8, 12, 16, 20, 24]
        const forecastItemListAux = data.list
          .filter((item, index) => interval.includes(index))
          .map(item => ({ 
            hour: moment.unix(item.dt).hour(),
            weekDay: moment.unix(item.dt).format('dddd'),
            state: item.weather[0].main.toLowerCase(),
            temperature: toCelsius(item.main.temp)
          }))

        setForecastItemList(forecastItemListAux)
      } catch (error) {
        console.error(error.message)
      }
    }

    getForecast();
    
  }, [city, countryCode])

  return { city, charData, forecastItemList}
}

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