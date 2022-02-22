import React from 'react';
import WeatherDetails from '../WeatherDetails';
import { render } from '@testing-library/react';

test('WeatherDetails render', async () => {
  const { findByText } = render(<WeatherDetails humidity={10} wind={50} />)

  // Al pasar las barras se interpreta como regex
  const humidity = await findByText(/10/)

  const wind = await findByText(/50/)

  expect(humidity).toHaveTextContent('Humedad: 10 %')
  expect(wind).toHaveTextContent('Viento: 50 km/h')
})