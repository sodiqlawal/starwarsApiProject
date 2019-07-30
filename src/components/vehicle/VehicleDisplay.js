import React, { Component } from 'react';
import VehicleList from './VehicleList';
import '../../App.css';
import Header from '../Header';
import Scroll from '../../functions/Scroll';
// import { vehicles, apiCall } from './apiCall';

class VehicleDisplay extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    const url = 'https://swapi.co/api/starships/';
    fetch(url).then(plan => plan.json()
    )
      .then((users) => {
        this.setState({ vehicles: users.results })
        console.log(this.state.vehicles)
      });
    // apiCall(vehicles).then(user=>this.setState({ vehicles: user }))

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { vehicles, searchfield } = this.state;
    const filteredVehicles = vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(searchfield.toLowerCase()));
    // console.log(filteredVehicles)
    return (

        !vehicles.length ?
        <>
        <Header searchChange={this.onSearchChange}/>
        <div className='f2 tc mt3 green'>Loading...</div> 
        </>
        :      
        <div className='tc bg-black'>
          <h1 className='f1 head'>Vehicles</h1>
          <Header searchChange={this.onSearchChange} />
          <Scroll>
          <VehicleList vehicles={filteredVehicles}/>
          </Scroll>
        </div>        
    );
  }
}

export default VehicleDisplay;
