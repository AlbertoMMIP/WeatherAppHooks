import React from 'react'
import 'typeface-roboto'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const CityInfo = ({ city, country }) => {
  return (
    <>
      <Typography display='inline' variant='h4' >{city}, </Typography>
      <Typography display='inline' variant='h6' >{country}</Typography>
    </>
  )
}

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default CityInfo
