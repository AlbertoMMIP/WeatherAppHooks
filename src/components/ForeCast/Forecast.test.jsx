import React from 'react';
import Forecast from './Forecast';
import { render } from '@testing-library/react';

const forecastItemList = [
  { hour: 18, state: 'cloud', temperature: 9, weekDay: 'Martes' },
  { hour: 10, state: 'fog', temperature: 5, weekDay: 'Miercoles' },
  { hour: 14, state: 'rain', temperature: 7, weekDay: 'Jueves' },
  { hour: 3, state: 'sunny', temperature: 15, weekDay: 'Viernes' },
  { hour: 9, state: 'fog', temperature: 13, weekDay: 'Sabado' },
  { hour: 11, state: 'cloudy', temperature: 10, weekDay: 'Domingo' },
  { hour: 13, state: 'sunny', temperature: 30, weekDay: 'Lunes' }
]

test('Forecast render', async () => {
  const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

  const forecastItems = await findAllByTestId('forecast-item-container');

  expect(forecastItems).toHaveLength(7);
})