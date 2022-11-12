import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import WelcomPage from './pages/WelcomPage';


const App = () => {
  const [allWeather, setAllWeather] = useState({});

  const onSetAllWeather = useCallback((newWeatherCity) => {
    setAllWeather(allWeather => ({ ...allWeather, ...newWeatherCity }))
  }, [setAllWeather])

  const actions = useMemo(() => (
    {
      onSetAllWeather
    }
  ), [onSetAllWeather]);

  const data = useMemo(() => (
    {
      allWeather
    }
  ), [allWeather]);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomPage />
        </Route>
        <Route path='/main'>
          <MainPage
            data={data}
            actions={actions} />
        </Route>
        <Route path='/city/:countryCode/:city'>
          <CityPage
            data={data}
            actions={actions} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;