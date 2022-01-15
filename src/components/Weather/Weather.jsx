import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { WiCloud } from 'react-icons/wi'

const Weather = ({ temperature }) => {
  return (
    <>
      <WiCloud></WiCloud>
      <Typography display='inline' variant='h2'>{temperature}</Typography>
    </>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired
}

export default Weather
