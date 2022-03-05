import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types'
import axios from 'axios';
import { Grid, List, ListItem } from '@mui/material'
import CityInfo from './../CytiInfo'
import Weather from './../Weather'
import { getUrlWeatherByCity } from '../../services/getUrlWeatherbyCity';

// renderCityAndCountry it will be a funct that return another function
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const { city, country } = cityAndCountry
  // const { temperature, state } = weather
  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container
        justify="center"
        alignItems="center"  >
        <Grid item
          md={9}
          xs={12} >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item
          md={3}
          xs={12} >
          {
            weather 
              ? <Weather temperature={weather.temperature} state={weather.state}/>
              : <p>No hay datos</p>
          }
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({ cities, onClickCity }) => {
  /*
    allWeather = {
      'Ciudad de México-México': {},
      'Madrid-España': {},
      'Buenos Aires-Argentina': {},
      'Bogota-Colombia': {}
    }
  */
  const [allWeather, setAllWeather] = useState({});

  useEffect(() => {
    if (allWeather['Ciudad de México-México']) return;
    const setWeather = (city, country) => {
      axios.get(getUrlWeatherByCity(city))
        .then(response => {
          const { data } = response;
          const temperature = data.main.temp
          const state = 'sunny'
          setAllWeather(allWeather => ({ ...allWeather, [`${city}-${country}`]: { temperature, state } }))
        })
    }
    cities.forEach(({ city, country }) => {
      setWeather(city, country);
    });
  }, [cities])
  
  // const weather = { temperature: 10, state: 'sunny'}
  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
      }
    </List>
  )
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CityList