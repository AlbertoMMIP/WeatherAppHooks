import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@mui/material'
import CityList from './../components/CityList';
import AppFrame from './../components/AppFrame';
import { getCities } from '../services/cities';

const MainPage = ({ allWeather, onSetAllWeather }) => {
  const history = useHistory();

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  }

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={getCities()}
          onClickCity={onClickHandler}
          allWeather={allWeather}
          onSetAllWeather={onSetAllWeather} />
      </Paper>
    </AppFrame>
  )
}

export default MainPage;