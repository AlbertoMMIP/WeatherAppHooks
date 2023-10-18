import React, { useMemo } from 'react';
import WelcomeScreen from './../components/Welcome';
import { Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';

const WelcomPage = () => {
  const iconContextSize = useMemo(() => ({ size: '6em' }), []);
  return (
    <WelcomeScreen>
      <Grid container
        direction='column'
        justifyContent='center'
        className='full'>
          <div className="highlight">
            <Grid item container xs={12}
              justifyContent='center'
              alignItems='center'>
                <Grid item>
                  <IconContext.Provider value={iconContextSize}>
                    <WiDaySunny />
                  </IconContext.Provider>
                </Grid>
                <Grid item
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'>
                    <Typography variant='h4' color='inherit'>
                      Weather App
                    </Typography>
                    <Link color='inherit'
                      aria-label='menu'
                      component={RouterLink}
                      to='/main'>
                        Ingresar
                    </Link>
                </Grid>
            </Grid>
          </div>
      </Grid>
    </WelcomeScreen> 
  )
}

export default WelcomPage;