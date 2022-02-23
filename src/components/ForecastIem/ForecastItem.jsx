import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import IconState from '../IconState/IconState';

const ForeCastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container
      direction="column"
      justify="center" 
      alignItems="center">
        <Grid item><Typography>{weekDay}</Typography></Grid>
        <Grid item><Typography>{hour}</Typography></Grid>
        <Grid item>
          <Typography>
            <IconState state={state} />
          </Typography>
        </Grid>
        <Grid item><Typography>{temperature} º</Typography></Grid>
    </Grid>
  )
}

ForeCastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}

export default ForeCastItem;