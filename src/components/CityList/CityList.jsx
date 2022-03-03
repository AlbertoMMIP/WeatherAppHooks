import React from 'react';
import { PropTypes } from 'prop-types'
import { Grid, List, ListItem } from '@mui/material'
import CityInfo from './../CytiInfo'
import Weather from './../Weather'

// renderCityAndCountry it will be a funct that return another function
const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
  const { city, country } = cityAndCountry

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container
        justify="center"
        alignItems="center"  >
        <Grid item
          md={9} >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item
          md={3} >
          <Weather temperature={10} state='sunny'/>
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
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