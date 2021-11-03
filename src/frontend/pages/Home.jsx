import React from 'react';
import GreetingInformation from '../containers/GreetingInformation';
import Section from '../containers/Section';

const Home = () => {
  
	return (
		<>
			<GreetingInformation />
			<div className="container-sections">
        <Section route='/experiences' nameSection='Experiencias'/>
        <Section route='/processes' nameSection='Procesos'/>
        <Section route='/orders' nameSection='Asignaciones'/>
      </div>
		</>
	);
}

export default Home;
