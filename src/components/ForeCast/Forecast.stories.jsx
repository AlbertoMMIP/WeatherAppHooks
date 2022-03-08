import React from 'react';
import Forecast from './Forecast';

export default {
  title: 'Forecast',
  component: Forecast
}
const forecastItemList = [
  { hour: 14, state: 'rain', temperature: 7, weekDay: 'Jueves' },
  { hour: 3, state: 'clear', temperature: 15, weekDay: 'Viernes' },
  { hour: 9, state: 'thunderstorm', temperature: 13, weekDay: 'Sabado' },
  { hour: 11, state: 'clouds', temperature: 10, weekDay: 'Domingo' },
  { hour: 13, state: 'drizzle', temperature: 30, weekDay: 'Lunes' }
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)