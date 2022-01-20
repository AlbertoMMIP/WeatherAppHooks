import React from 'react';
import { PropTypes } from 'prop-types'
import CityInfo from './../CytiInfo'
import Weather from './../Weather'

const renderCityAndCountry = cityAndCountry => {
  const { city, country } = cityAndCountry

  return (
    <li key={city}>
      <Weather temperature={10} state='sunny'/>
      <CityInfo city={city} country={country} />
    </li>
  )
}

const CityList = ({ cities }) => {
  return (
    <ul>
      {
        cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
      }
    </ul>
  )
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default CityList