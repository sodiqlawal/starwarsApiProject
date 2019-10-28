import React from 'react';
import '../../App.css';
import imageLoop from '../../functions/imageLoop';



const PlanetList = ({ planets  }) => {

	const planetArray = planets.map((user, i) => {
		const image = imageLoop(planets[i].name)
		return (
			<Display
				key={i}
				diameter={planets[i].diameter}
				name={planets[i].name}
				terrain={planets[i].terrain}
				image={image}
			/>
		);
	
		})
	
		return (
			<div>
				{planetArray}
			</div>
		)
}


const Display = ({ terrain, name, diameter, image }) => {
	return (
		<div className='tc bg-light-grey white dib br3 be3 pa2 ma2 grow bw2 b--gold my3 planet shadow-5 '>
			<img alt='' src={require(`../../starwars/${image}`)}
			style={{ width: '300px', height: '200px'}}
			className='br3 grow bw2 shadow-5'
			 />
			<div className='silver'>
				<h2>{name}</h2>
				<p>{terrain}</p>
				<p>{diameter}</p>
			</div>
		</div>
	);
}



export default PlanetList;