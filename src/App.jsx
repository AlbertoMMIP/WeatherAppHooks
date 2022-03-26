import React, { useState, useMemo } from 'react';
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

  const onSetAllWeather = useMemo(() => ((newWeatherCity) => {
    setAllWeather(allWeather => ({ ...allWeather, ...newWeatherCity }))
  }), [setAllWeather])
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomPage />
        </Route>
        <Route path='/main'>
          <MainPage
            allWeather={allWeather}
            onSetAllWeather={onSetAllWeather} />
        </Route>
        <Route path='/city/:countryCode/:city'>
          <CityPage
            allWeather={allWeather}
            onSetAllWeather={onSetAllWeather} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;