import React from "react";
import { render } from '@testing-library/react';
import CityList from "./CityList";

const cities = [
  { city: 'Mexico', country: 'CDMX' },
  { city: 'España', country: 'Madrid' },
  { city: 'Argentina', country: 'Buenos Aires' },
  { city: 'Colombia', country: 'Bogota' }
]

test('City List render', async () => {
  const { findAllByRole } = render(<CityList cities={cities} />)
  const items = await findAllByRole('listitem')
  expect(items).toHaveLength(4)
})