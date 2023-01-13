import React from 'react';
import { PropTypes } from 'prop-types';
import { List, Alert } from '@mui/material';
import useCityList from './../../hooks/useCityList';
import { getCityCode } from './../../utils/utils';
import { CityListItem } from '../CytiListItem/CityListItem';
import { useWeatherStateContext, useWeatherDispatchContext } from '../../WeatherContext';

// renderCityAndCountry it will be a funct that return another function
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const { city, countryCode } = cityAndCountry;
  return <CityListItem  key={getCityCode(city, countryCode)}  
    eventOnClickCity={eventOnClickCity} 
    weather={weather}
    {...cityAndCountry}
  />
}

const CityList = ({ cities, onClickCity }) => {
  const actions = useWeatherDispatchContext()
  const data = useWeatherStateContext()
  // const { onSetAllWeather } = actions
  const { allWeather } = data
  const {error, setError} = useCityList(cities, allWeather, actions)
  
  return (
    <div>
      {
        error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert> 
      }
      <List>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[`${getCityCode(cityAndCountry.city, cityAndCountry.countryCode)}`]))
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

export default React.memo(CityList)