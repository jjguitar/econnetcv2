import React, { useContext } from 'react';
import ExperienceItem from '../components/ExperienceItem';
import { connect } from 'react-redux';
import { setModal, loadData } from '../actions/index'
import AppContext from '../context/AppContext';
import '../styles/Greetings.scss';

// const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=10';

const GreetingInformation = ({meetings, loading, loadData }) => {
	// const products = useGetProducts(API);
  // const { searchedExps, loading } = useContext(AppContext)
  // loadData()
  console.log(meetings)

  const expSkeleton = {
    id: 99999999999999999999999,
    name: 'Cargando las Experiencias...',
    date: 'YYYY-MM-DD...',
    load: true,
  }
  const showGreeting = () => {

    let date = new Date();
    let hour = date.getHours();

    if(hour >= 0 && hour < 12){
      return "Good morning";
    }

    if(hour >= 12 && hour < 18){
      return "Good afternoon";
    }

    if(hour >= 18 && hour < 24){
      return "Good night";
    }
  }

	return (
		<div className="main-container">
      <h1>Hi Jhon</h1>
      <h3>{showGreeting()}</h3>
			<div className="ExperienceList">
      {loading ?
        <ExperienceItem exp={expSkeleton} key={expSkeleton.id} />
      :
				meetings.map(exp => (
					<ExperienceItem exp={exp} key={exp.id} />
				))
      }
			</div>
		</div>
	);
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  setModal,
  loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetingInformation);
