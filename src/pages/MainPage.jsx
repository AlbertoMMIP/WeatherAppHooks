import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from './../components/CityList'

const cities = [
  { city: 'Mexico', country: 'CDMX' },
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
    <div>
      <h2>Lista de Ciudades</h2>
      <CityList cities={cities} onClickCity={onClickHandler} />
    </div>
  )
}

export default MainPage;