import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CityPage from './pages/CityPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import WelcomPage from './pages/WelcomPage';


const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App;