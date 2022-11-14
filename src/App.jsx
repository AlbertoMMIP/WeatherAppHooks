import React, { useReducer } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import WelcomPage from './pages/WelcomPage';


const App = () => {
  const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}
  };
  // action = { type: 'TYPE_DESC', payload: 'DATA' }
  const reducer = (state, action) => {
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
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  /*
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
  */
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <WelcomPage />
        </Route>
        <Route path='/main'>
          <MainPage
            data={state}
            actions={dispatch} />
        </Route>
        <Route path='/city/:countryCode/:city'>
          <CityPage
            data={state}
            actions={dispatch} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;