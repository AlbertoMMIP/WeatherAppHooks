import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import IconState from '../IconState/IconState';
import { Grid, Skeleton } from '@mui/material';
import { IconContext } from 'react-icons';

const Weather = ({ temperature, state }) => {
  return (
    <Grid container item
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={1}>
        <IconContext.Provider value={{ size: '6em' }}>
        {
          state ?
          <IconState state={state} /> :
          <Skeleton variant='circle' height={80} width={80} />
        }
        </IconContext.Provider>
        {
          temperature ?
          <Typography display='inline' variant='h2'>{temperature}</Typography> :
          <Skeleton variant='rect' height={40} width={80} />
        }
    </Grid>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number
}

export default Weather
