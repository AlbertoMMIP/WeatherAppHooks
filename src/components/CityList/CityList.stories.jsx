import React from 'react';
import CityList from './CityList'

export default {
  title: 'CityList',
  component: CityList
}

const cities = [
  { city: 'Mexico', country: 'CDMX' },
  { city: 'España', country: 'Madrid' },
  { city: 'Argentina', country: 'Buenos Aires' },
  { city: 'Colombia', country: 'Bogota' }
]

export const CityListExample = () => <CityList cities={cities} />