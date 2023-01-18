import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import WelcomPage from './pages/WelcomPage';
import { WeatherContext } from './WeatherContext';


const App = () => {
  return (
    <WeatherContext>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomPage />} />
          <Route path='/main/*' element={<MainPage />} />
          <Route path='/city/:countryCode/:city' element={<CityPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </WeatherContext>
  )
}

export default App;