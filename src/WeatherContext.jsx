import React, { useContext, useReducer } from 'react';

const WeatherStateContext = React.createContext();

const WeatherDispatchContext = React.createContext();

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



const WeatherContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <WeatherDispatchContext.Provider value={dispatch} >
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>)
}

const useWeatherStateContext = () => {
  const state = useContext(WeatherStateContext);
  if (!state) {
    throw Error('Must set state provider')
  }
  return state;
}

const useWeatherDispatchContext = () => {
  const dispatch = useContext(WeatherDispatchContext);
  if (!dispatch) {
    throw Error('Must set dispatch provider')
  }
  return dispatch;
}

export {
  WeatherContext,
  useWeatherStateContext,
  useWeatherDispatchContext
}