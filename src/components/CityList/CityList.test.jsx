// import React from "react";
// import { render, fireEvent } from '@testing-library/react';
// import CityList from "./CityList";

// const cities = [
//   { city: 'México', country: 'Ciudad de México', countryCode: 'MX' },
//   { city: 'España', country: 'Madrid', countryCode: 'ES' },
//   { city: 'Argentina', country: 'Buenos Aires', countryCode: 'AR' },
//   { city: 'Colombia', country: 'Bogota', countryCode: 'CO' }
// ]

// test('City List render', async () => {
//   const { findAllByRole } = render(<CityList cities={cities}  onClickCity={ () => {} } />)
//   const items = await findAllByRole('button')
//   expect(items).toHaveLength(5)
// })

// test('City List click on item', async () => {
//   // We have to simulate an action: Click on an item
//   // We must to use the function "mock"
//   const fnClickOnItem = jest.fn()
  
//   const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

//   const items = await findAllByRole('button')

//   // Now, to simulate the action, we have to use fireEvent
//   // fireEvent is part of lib testing-library/react
//   fireEvent.click(items[0])

//   // What thing do we wait?
//   // That the funct fnClickOnItem was called once
//   expect(fnClickOnItem).toHaveBeenCalledTimes(1)
// })