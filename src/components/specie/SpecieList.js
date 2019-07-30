import React from 'react';
import imageLoop from '../../functions/imageLoop';



const SpecieList = ({ species  }) => {

	const specieArray = species.map((user, i) => {
		const image = imageLoop(species[i].name)
		return (
			<Display
                key={i}
                name={species[i].name}
				classification={species[i].classification}
				designation={species[i].designation}
				skin_colors={species[i].skin_colors}
				image={image}
			/>
		);
	
		})
	
		return (
			<div>
				{specieArray}
			</div>
		)
}


const Display = ({ name, classification, designation, skin_colors, image }) => {
	return (
		<div className='tc dib br3 be3 pa2 w-25 ma2 grow bw2 specie'>
			<img alt='' src={require(`../../starwars/${image}`)}
			style={{ width: '300px', height: '200px'}}
			className='br3 grow bw2'
			 />
			<div className='silver'>
				<h2>{name}</h2>
                <p>{classification}</p>
				<p>{designation}</p>
				<p>{skin_colors}</p>
			</div>
		</div>
	);
}



export default SpecieList;