import React from 'react';
import ForeCastItem from './ForecastItem';
import { render } from '@testing-library/react';

test('ForecastItem render', async () => {
  const { findByText } = render(<ForeCastItem weekDay='Monday' hour={15} state='clear' temperature={27} />)

  const weekDay = await findByText(/Monday/)
  const hour = await findByText(/15/)

  expect(weekDay).toHaveTextContent('Monday')
  expect(hour).toHaveTextContent('15')
})