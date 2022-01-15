import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing *objeto del testeo


test('CityInfo render', async () => {
  // A A A
  // Arrange
  // Act
  const city = 'Buenos Aires'
  const country = 'Argentina'
  // Render => renderiza el componente y retorna una serie de funciones de utilidad
  // En este caso utilizamos  "findAllByRole" para consultar a nuestro componente
  // Y se analizará el estado en el asert
  const { findAllByRole } = render(<CityInfo city={city} country={country} />)
  // Assert
  // findAllByRole nos va a buscar en este caso todos los componentes que sean "heading" => H1, etc
  // El resultado es un array de componentes
  const cityAndCountryComponents = await findAllByRole("heading")
  // Cuando el test es correcto?
  // Cuando en el primer elemento (heading) se encuentre el pais enviado
  expect(cityAndCountryComponents[0]).toHaveTextContent(city)
  expect(cityAndCountryComponents[1]).toHaveTextContent(country)

  // Si estas condiciones se cumplen, el test estará correcto 
})