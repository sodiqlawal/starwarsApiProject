import React, { Component } from 'react';
import SpecieList from './SpecieList';
import '../../App.css';
import Header from '../Header';
import Scroll from '../../functions/Scroll';

class SpecieDisplay extends Component {
  constructor() {
    super()
    this.state = {
      species: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    const url = 'https://swapi.co/api/species/';
    fetch(url).then(plan => plan.json()
    )
      .then(users => {
        this.setState({ species: users.results })
        console.log(this.state.species)
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { species, searchfield } = this.state;
    const filteredSpecies = species.filter(specie => specie.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (

        !species.length ?
        <>
        <Header searchChange={this.onSearchChange}/>
        <div className='f2 tc mt3 green'>Loading...</div> 
        </>
        :      
        <div className='tc bg-black'>
          <h1 className='f1 head'>Species</h1>
          <Header searchChange={this.onSearchChange} />
          <Scroll>
          <SpecieList species={filteredSpecies}/>
          </Scroll>
        </div>        
    );
  }
}

export default SpecieDisplay;
