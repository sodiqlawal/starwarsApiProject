import React from 'react';
import imageLoop from '../../functions/imageLoop';



const VehicleList = ({ vehicles }) => {

	const vehicleArray = vehicles.map((vehicle, i) => {
		console.log(vehicle.name)
		const image = imageLoop(vehicle.name)
		// if(vehicle.name){
		// 	console.log(true)
		// }
		return (
			<Display
				key={i}
				model={vehicle.model}
				name={vehicle.name}
				manufacturer={vehicle.manufacturer}
				image={image}
			/>
		);
	
		})
	
		return (
			<div>
				{vehicleArray}
			</div>
		)
}


const Display = ({ model, name, manufacturer, image }) => {

	return (
		<div className='tc dib br3 be3 pa2 ma2 my3 grow bw2 film'>
			<img alt='' src={require(`../../starwars/${image}`)}
			style={{ width: '300px', height: '200px'}}
			className='br3 grow bw2'
			 />
			<div className='silver'>
				<h2>{name}</h2>
				<p>{model}</p>
				<p>{manufacturer}</p>
			</div>
		    </div>
	);
}



export default VehicleList;