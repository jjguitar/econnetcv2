import React, { useContext } from 'react';
import ExperienceItem from '../components/ExperienceItem';
import { connect } from 'react-redux';
import AppContext from '../context/AppContext';
import '../styles/Greetings.scss';

// const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=10';

const GreetingInformation = ({meetings}) => {
	// const products = useGetProducts(API);
  // const { searchedExps, loading } = useContext(AppContext)
  console.log(meetings)

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
      } */}
			<div className="ExperienceList">
				{meetings.map(exp => (
					<ExperienceItem exp={exp} key={exp.id} />
				))}
			</div>
		</section>
	);
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  };
};

export default connect(mapStateToProps, null)(GreetingInformation);
