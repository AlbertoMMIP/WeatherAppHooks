import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material'
import CityList from './../components/CityList';
import AppFrame from './../components/AppFrame';
import { getCities } from '../services/cities';

const MainPage = () => {
  const navigate = useNavigate();

  const onClickHandler = React.useCallback((city, countryCode) => {
    navigate(`/city/${countryCode}/${city}`);
  }, [navigate])

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={getCities()}
          onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  )
}

export default MainPage;