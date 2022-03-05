import React from 'react'
import { Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { WiRain } from 'react-icons/wi';

const NotFound = () => {
  return (
    <Grid container
        direction='column'
        justifyContent='center'
        className='full'>
          <div className="highlight">
            <Grid item container xs={12}
              justifyContent='center'
              alignItems='center'>
                <Grid item>
                  <IconContext.Provider value={{ size:'6em'}}>
                    <WiRain />
                  </IconContext.Provider>
                </Grid>
                <Grid item
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'>
                    <Typography variant='h4' color='inherit'>
                      404 | La página no existe
                    </Typography>
                    <Link color='inherit'
                      aria-label='menu'
                      component={RouterLink}
                      to='/'>
                        Velver al inicio
                    </Link>
                </Grid>
            </Grid>
          </div>
      </Grid>
  )
}

export default NotFound