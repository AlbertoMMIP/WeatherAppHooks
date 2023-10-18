import React from 'react'
import Weather from './Weather'

export default {
  title: 'Weather',
  component: Weather
}

const Templeate = (args) => <Weather {...args} />

export const WeatherCloud = Templeate.bind({})
WeatherCloud.args = { temperature: 10, state: 'clouds' }

export const WeatherSunny = Templeate.bind({})
WeatherSunny.args = { temperature: 10, state: 'clear' }
