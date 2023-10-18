import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { IconContext } from 'react-icons';
import IconState, { validValues } from '../IconState/IconState';

const ForeCastItem = ({ weekDay, hour, state, temperature }) => {
  const iconContextSize = useMemo(() => ({ size: '5em' }), []);
  return (
    <Grid container
      direction="column"
      justify="center" 
      alignItems="center">
        <Grid item><Typography>{weekDay}</Typography></Grid>
        <Grid item><Typography>{hour}</Typography></Grid>
        <Grid item>
          <IconContext.Provider value={iconContextSize}>
            <IconState state={state} />
          </IconContext.Provider>
        </Grid>
        <Grid item><Typography>{temperature} º</Typography></Grid>
    </Grid>
  )
}

ForeCastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired
}

export default ForeCastItem;