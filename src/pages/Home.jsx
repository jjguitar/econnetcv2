import React from 'react';
import GreetingInformation from '@containers/GreetingInformation';
import Section from '@containers/Section';

const Home = () => {
	return (
		<>
			<GreetingInformation />
			<Section route='/experiences' nameSection='Experiencias'/>
			<Section route='/account' nameSection='Procesos'/>
			<Section route='/orders' nameSection='Asignaciones'/>
		</>
	);
}

export default Home;
