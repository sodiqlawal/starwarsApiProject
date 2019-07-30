import React, { Component } from 'react';
import PlanetList from './PlanetList';
import '../../App.css';
import Header from '../Header';
import Scroll from '../../functions/Scroll';


class PlanetDisplay extends Component {
  constructor() {
    super()
    this.state = {
      planets: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    const url = 'https://swapi.co/api/planets/';
    fetch(url).then(plan => plan.json()
    )
      .then(users => {
        this.setState({ planets: users.results })
        console.log(this.state.wars)
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { planets, searchfield } = this.state;
    const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (

        !planets.length ?
        <>
        <Header searchChange={this.onSearchChange}/>
        <div className="f2 tc mt3 green">Loading...</div> 
        </>
        :      
        <div className='tc bg-black'>
          <h1 className='f1 head'>Planets</h1>
          <Header searchChange={this.onSearchChange} />
          <Scroll>
          <PlanetList planets={filteredPlanets}/>
          </Scroll>
        </div>        
    );
  }
}

export default PlanetDisplay;
