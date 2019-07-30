import React, { Component } from 'react';
import logo from '../starwars/logo.jpg';
import SearchBox from '../functions/SearchBox';
import { NavLink } from 'react-router-dom';
import '../Header.css';





class Header extends Component {
    constructor() {
        super() 
        this.state = {
            visible: false,
        }
    }

    togglevisible = () => {
        this.setState({
            visible:!this.state.visible
        })
    }

    render() {
              
        return (
            <>
                <nav className="menu">
                    <h1 style={{ backgroundImage: `url(${logo})`}} className="menu__logo" ></h1>
                    <div className="menu__right">
                        <ul className="menu__list">
                            <li className='menu__list-item'><NavLink exact to='/' className="menu__link" activeClassName='active'>films</NavLink></li>
                            <li className='menu__list-item'><NavLink to='/species' className="menu__link" activeClassName='active'>species</NavLink></li>
                            <li className='menu__list-item'><NavLink to='/planets' className="menu__link" activeClassName='active'>planets</NavLink></li>
                            <li className='menu__list-item'><NavLink to='/vehicles' className="menu__link" activeClassName='active'>vehicles</NavLink></li>
                        </ul>
                        <button onClick={this.togglevisible} className=".header_search-btn"></button>
                        <SearchBox visibility={this.state.visible} searchChange={this.props.searchChange} />
                    </div>
                </nav> 
            </>
        )
    }
}

export default Header;












