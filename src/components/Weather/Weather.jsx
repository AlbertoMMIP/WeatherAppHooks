import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import IconState from '../IconState/IconState';

const Weather = ({ temperature, state }) => {
  return (
    <>
      <IconState state={state} />
      <Typography display='inline' variant='h3'>{temperature}</Typography>
    </>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
}

export default Weather
