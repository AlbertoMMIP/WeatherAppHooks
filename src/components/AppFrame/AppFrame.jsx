import React, { useMemo } from 'react';
import { Grid,
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Typography } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import PropTypes from 'prop-types';

const AppFrame = ({ children }) => {
  const iconContextSize = useMemo(() => ({ size: '2em' }), [])
  return (
    <Grid container 
      justifyContent='center'>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton color='inherit' aria-label='menu'>
            <Link component={LinkRouter} to='/' color='inherit' arial-label='menu'>
              <IconContext.Provider value={iconContextSize}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant='h6' color='inherit'>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item
        xs={12}
        sm={11}
        md={10}
        lg={8}>
          {children}
      </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
  children: PropTypes.node
}

export default AppFrame;