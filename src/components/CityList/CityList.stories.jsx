import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CityList',
  component: CityList
}
const cities = [
  { city: 'México', country: 'Ciudad de México', countryCode: 'MX' },
  { city: 'España', country: 'Madrid', countryCode: 'ES' },
  { city: 'Argentina', country: 'Buenos Aires', countryCode: 'AR' },
  { city: 'Colombia', country: 'Bogota', countryCode: 'CO' }
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action('Click on City')} />