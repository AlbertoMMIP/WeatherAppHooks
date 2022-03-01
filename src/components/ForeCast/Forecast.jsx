import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './../ForecastItem'
import { validValues } from '../IconState/IconState';
import { Grid } from '@mui/material';

const renderForecastItem = forecast => {
  const { hour, weekDay, state, temperature } = forecast;
  // data-testid = Marca para encontrar cada item en los test
  return (
    <Grid data-testid='forecast-item-container'
      item key={`${weekDay}${hour}`}>
      <ForecastItem hour={hour} weekDay={weekDay} state={state} temperature={temperature} />
    </Grid>
  )
}

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container
      justify='center'
      alignItems='center'>
        {
          forecastItemList.map((forecast) => renderForecastItem(forecast))
        }
    </Grid>
  )
}

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Forecast;