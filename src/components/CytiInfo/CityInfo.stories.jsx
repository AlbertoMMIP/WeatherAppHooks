import React from 'react'
import CityInfo from './CityInfo'

export default {
  title: 'CityInfo',
  component: CityInfo,
  argTypes: {
    city: { control: { type: 'text' }},
    country: { control: { type: 'text' }}
  }
}

export const CityExample = (args) => <CityInfo {...args} ></CityInfo>


CityExample.args = { city: 'Vancouver', country: 'Canada' }