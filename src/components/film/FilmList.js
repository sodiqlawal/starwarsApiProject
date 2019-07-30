import React from 'react';
import imageLoop from '../../functions/imageLoop';

const FilmList = ({ films }) => {
	const filmArray = films.map((film, i) => {
		const image = imageLoop(film.title)
		return (
			<Display
				key={i}
				title= {film.title}
				director={film.director}
				producer={film.producer}
				release_date={film.release_date}
				image={image}
			/>
		);
	
		})
	
		return (
			<div>
				{filmArray}
			</div>
		)
}


const Display = ({ title, director, producer, release_date, image }) => {
	return (
		<div className='tc dib br3 be3 pa2 w-25 ma2 grow bw2 film'>
			<img alt='' src={require(`../../starwars/${image}`)}
			style={{ width: '300px', height: '200px'}}
			className='br3 grow bw2'
			 />
			<div className='silver'>
				<h2>{title}</h2>
				<p>{director}</p>
				<p>{producer}</p>
				<p>{release_date}</p>
			</div>
		</div>
	);
}



export default FilmList;