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
  const [allChartData, setAllChartData] = useState({});
  const [allForecastItemList, setAllForecastItemList] = useState({});

  const onSetAllWeather = useCallback((newWeatherCity) => {
    setAllWeather(allWeather => ({ ...allWeather, ...newWeatherCity }))
  }, [setAllWeather])

  const onSetChartData = useCallback((newChartData) => {
    setAllChartData(chartData => ({ ...chartData, ...newChartData}))
  }, [setAllChartData])

  const onSetForecastItemList = useCallback((newForecastItemList) => {
    setAllForecastItemList(forecastItemList => ({ ...forecastItemList, ...newForecastItemList }))
  }, [setAllForecastItemList])

  const actions = useMemo(() => (
    {
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList
    }
  ), [onSetAllWeather, onSetChartData, onSetForecastItemList]);

  const data = useMemo(() => (
    {
      allWeather,
      allChartData,
      allForecastItemList
    }
  ), [allWeather, allChartData, allForecastItemList]);

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