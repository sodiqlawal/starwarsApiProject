import React, { Component } from 'react';
import FilmList from './FilmList';
import '../../App.css';
import Header from '../Header';
import Scroll from '../../functions/Scroll';

class FilmDisplay extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films/';
    fetch(url).then(plan => plan.json()
    )
      .then(users => {
        this.setState({ films: users.results })
        console.log(this.state.films)
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { films, searchfield } = this.state;
    const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchfield.toLowerCase()));

    return (

        !films.length ?
        <>
        <Header searchChange={this.onSearchChange}/>
        <div className='f2 tc mt3 green'>Loading...</div> 
        </>
        :      
        <div className='tc bg-black'>
          <h1 className='f1 head'>Films</h1>
          <Header searchChange={this.onSearchChange} />
          <Scroll>
          <FilmList films={filteredFilms}/>
          </Scroll>
        </div>        
    );
  }
}

export default FilmDisplay;
