import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { connect } from 'react-redux';
import { setSearchValue, findData } from '../actions/index'
import useGetProducts from '../hooks/useGetProducts';
import axios from 'axios';
// import '../../assets/styles/ExpSearch.css'

const ExpSearch = ({searchValue, setSearchValue, meetings, loading, findData}) => {

  // loadData()
	// useEffect(async () => {
	// 	const response = await axios('http://localhost:3000/api/v1/meeting');
	// 	setProducts(response.data);
	// }, [setLoadings(false)]);
  // // const { loading, totalExps, searchValue, setSearchValue } = useContext(AppContext);

  // console.log(products);
  // console.log(loadings);
  const onSearchValueChange = async (event) => {
    event.preventDefault()
    console.log(event.target.value);
    setSearchValue(event.target.value)
    findData()
  };

  return (
    <React.Fragment>
      {(meetings.length > 0) ?
        <input
          className="ExpSearch"
          placeholder="Busca tus Experiencias"
          value={searchValue}
          onChange={onSearchValueChange}
        /> :
        loading ? <h2 className="ExpSearch-loading">Exp en un solo lugar.</h2> : <h2>Aún no tienes Experiencias...</h2>
      }
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal,
    meetings: state.meetings,
    searchValue: state.searchValue,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  setSearchValue,
  findData
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpSearch);
