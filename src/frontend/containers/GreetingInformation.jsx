import React, { useContext } from 'react';
import ExperienceItem from '../components/ExperienceItem';
import AppContext from '../context/AppContext';
import '../styles/Greetings.scss';

// const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=10';

const GreetingInformation = (searchedExps) => {
	// const products = useGetProducts(API);
  const { loading } = useContext(AppContext)
  console.log(searchedExps)

  const expSkeleton = {
    id: 99999999999999999999999,
    tittle: 'Cargando las Experiencias...',
    date: 'YYYY-MM-DD...'
  }
	return (
		<section className="main-container">
      <h1>Hi Jhon</h1>
      <h3>Good good</h3>
      {/* {loading &&
        <ExperienceItem exp={expSkeleton} key={expSkeleton.id} />
      }
			<div className="ExperienceList">
				{searchedExps.map(exp => (
					<ExperienceItem exp={exp} key={exp.id} />
				))}
			</div> */}
		</section>
	);
}

export default GreetingInformation;
