import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@mui/material'
import CityList from './../components/CityList';
import AppFrame from './../components/AppFrame';

const cities = [
  { city: 'México', country: 'Ciudad de México' },
  { city: 'España', country: 'Madrid' },
  { city: 'Argentina', country: 'Buenos Aires' },
  { city: 'Colombia', country: 'Bogota' }
]

const MainPage = () => {
  const history = useHistory();
  const onClickHandler = () => {
    // Permite trabajar con la url y cambiarla dentro de la programacion
    history.push('/city')
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