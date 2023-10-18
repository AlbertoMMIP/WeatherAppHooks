import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
  WiDaySunny,
  WiRain, 
  WiRaindrop, 
  WiSnow,
  WiThunderstorm,
  WiRainMix } from 'react-icons/wi'
import { IconContext } from 'react-icons'

export const validValues = [
  'clouds',
  'clear',
  'rain',
  'snow',
  'drizzle',
  'thunderstorm',
  'mist'
]

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
  mist: WiRainMix
}

const IconState = ({ state }) => {
  const StateByName = stateByName[state]
  return (
    <IconContext.Provider value={{ size: '6em'}}>
      <StateByName />
    </IconContext.Provider>
  )
}

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState