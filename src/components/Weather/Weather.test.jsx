import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'

// TDD
test('Weather render sunny', async () => {
  // AAA Arrange Act Assert
  const { findByRole } = render(<Weather temperature={40} state='sunny' />)

  const temp = await findByRole('heading')

  expect(temp).toHaveTextContent(40)
})

// TDD
test('Weather render cloudy', async () => {
  // AAA Arrange Act Assert
  const { findByRole } = render(<Weather temperature={2} state='cloudy' />)

  const temp = await findByRole('heading')

  expect(temp).toHaveTextContent(2)
})