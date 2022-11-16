import React from 'react';
import { Grid, ListItem } from '@mui/material';
import CityInfo from './../CytiInfo';
import Weather from './../Weather';

export const CityListItem = React.memo(({ city, country, countryCode, eventOnClickCity, weather }) => {
  return (
    <ListItem button
      onClick={() => eventOnClickCity(city, countryCode)}>
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
  );
});