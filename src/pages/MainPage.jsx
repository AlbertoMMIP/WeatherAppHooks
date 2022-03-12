import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@mui/material'
import CityList from './../components/CityList';
import AppFrame from './../components/AppFrame';

const cities = [
  { city: 'México', country: 'Ciudad de México', countryCode: 'MX' },
  { city: 'España', country: 'Madrid', countryCode: 'ES' },
  { city: 'Argentina', country: 'Buenos Aires', countryCode: 'AR' },
  { city: 'Colombia', country: 'Bogota', countryCode: 'CO' }
]

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = (city, countryCode) => {
    // Permite trabajar con la url y cambiarla dentro de la programacion
    history.push(`/city/${countryCode}/${city}`);
  }

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  )
}

export default MainPage;