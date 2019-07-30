import React from 'react';
import FilmDisplay from '../components/film/FilmDisplay';
import SpecieDisplay from '../components/specie/SpecieDisplay';
import PlanetDisplay from '../components/planet/PlanetDisplay';
import VehicleDisplay from '../components/vehicle/VehicleDisplay';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const NestedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    <Component {...props} />
  )} />
)

const App = () => {

  return (
    <>
      <Router>
        <Route exact path='/' component={FilmDisplay} />
        <NestedRoute path='/species' component={SpecieDisplay} />
        <NestedRoute path='/planets' component={PlanetDisplay} />
        <NestedRoute path='/vehicles' component={VehicleDisplay} />
      </Router>
    </>
  )
}
export default App;