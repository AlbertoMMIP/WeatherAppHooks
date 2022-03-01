import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Grid } from '@mui/material';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import WelcomPage from './pages/WelcomPage';


const App = () => {
  return (
    <Grid container
      justifyContent='center'
      direction='row'>
        <Grid item sm={10}>
          <h1>App</h1>
          <Router>
            <Switch>
              <Route exact path='/'>
                <WelcomPage />
              </Route>
              <Route path='/main'>
                <MainPage />
              </Route>
              <Route path='/city'>
                <CityPage />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </Grid>
    </Grid>
  )
}

export default App;