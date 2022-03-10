import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import convertUnits from 'convert-units';
import { Grid, List, ListItem, Alert } from '@mui/material';
import CityInfo from './../CytiInfo';
import Weather from './../Weather';
import { getUrlWeatherByCityAndCountryCode } from '../../services/getUrlWeatherbyCity';

// renderCityAndCountry it will be a funct that return another function
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const { city, country } = cityAndCountry
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
          <Weather temperature={weather && weather.temperature} state={weather && weather.state}/>
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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (allWeather['Ciudad de México-México']) return;
    const setWeather = async (city, country, countryCode) => {
      try {
        const url = getUrlWeatherByCityAndCountryCode(city, countryCode)
        const response = await axios.get(url)
        const { data } = response;
        const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
        const state = data.weather[0].main.toLowerCase();
        setAllWeather(allWeather => ({ ...allWeather, [`${city}-${country}`]: { temperature, state } }))
      } catch(err) {
        if (err.response) {
          setError('Error en el servidor');
        } else if (err.request) { // Errores que no llegan al server
          setError('Server inaccesible o sin internet');
        } else { // Errores inesperados
          setError('Error inesperado');
        }
      }
    }
    cities.forEach(({ city, country, countryCode }) => {
      setWeather(city, country, countryCode);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities])

  return (
    <div>
      {
        error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert> 
      }
      <List>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
        }
      </List>
    </div>
  )
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CityList