import React, { useReducer, useCallback } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import WelcomPage from './pages/WelcomPage';
import { WeatherStateContext, WeatherDispatchContext } from './WeatherContext';

const initialValue = {
  allWeather: {},
  allChartData: {},
  allForecastItemList: {}
};

const App = () => {

  // action = { type: 'TYPE_DESC', payload: 'DATA' }
  const reducer = useCallback((state, action) => {
    switch (action.type) {
      case 'SET_ALL_WEATHER':
        const newWeatherCity = action.payload;
        const newAllWeather = { ...state.allWeather, ...newWeatherCity };
        return { ...state, allWeather: newAllWeather };
      case 'SET_CHART_DATA':
        const chartDataCity = action.payload;
        const newChartData = { ...state.allChartData, ...chartDataCity };
        return { ...state, allChartData: newChartData };
      case 'SET_FORECAST_ITEM_LIST':
        const newForecastItemList = action.payload
        const newAllForecastItemList = { ...state.allForecastItemList, ...newForecastItemList };
        return { ...state, allForecastItemList: newAllForecastItemList};
      default:
        return state;
    }
  }, []);
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <WeatherDispatchContext.Provider value={dispatch} >
      <WeatherStateContext.Provider value={state}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <WelcomPage />
            </Route>
            <Route path='/main'>
              <MainPage />
            </Route>
            <Route path='/city/:countryCode/:city'>
              <CityPage />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  )
}

export default App;