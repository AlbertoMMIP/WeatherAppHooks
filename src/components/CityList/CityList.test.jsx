import React from "react";
import { render, fireEvent } from '@testing-library/react';
import CityList from "./CityList";

const cities = [
  { city: 'Mexico', country: 'CDMX' },
  { city: 'España', country: 'Madrid' },
  { city: 'Argentina', country: 'Buenos Aires' },
  { city: 'Colombia', country: 'Bogota' }
]

test('City List render', async () => {
  const { findAllByRole } = render(<CityList cities={cities} onClickCity={ () => {} } />)
  const items = await findAllByRole('listitem')
  expect(items).toHaveLength(4)
})

test('City List click on item', async () => {
  // We have to simulate an action: Click on an item
  // We must to use the function "mock"
  const fnClickOnItem = jest.fn()
  
  const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

  const items = await findAllByRole('listitem')

  // Now, to simulate the action, we have to use fireEvent
  // fireEvent is part of lib testing-library/react
  fireEvent.click(items[0])

  // What thing do we wait?
  // That the funct fnClickOnItem was called once
  expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})