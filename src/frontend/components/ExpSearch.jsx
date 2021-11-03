import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { connect } from 'react-redux';
import { setModal } from '../actions/index'
import useGetProducts from '../hooks/useGetProducts';
import axios from 'axios';
// import '../../assets/styles/ExpSearch.css'

const ExpSearch = () => {
  const [products, setProducts] = useState([]);
	const [loadings, setLoadings] = useState(true);

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
    setLoadings(true)
    const response = await axios({
      url: 'http://localhost:3000/api/v1/meeting',
    })
      .then((response) => {
        setProducts(response.data);
        setLoadings(false)
      })
      .catch((error) => {
        console.log(error);
      });
		// setProducts(response.data);
    // setLoadings(false)

    console.log(products);
    console.log(loadings);
  };

  return (
    <React.Fragment>
      {/* {(totalExps > 0) ? */}
        <input
          className="ExpSearch"
          placeholder="Busca tus Experiencias"
          // value={searchValue}
          onChange={onSearchValueChange}
        /> :
        {/* loading ? <h2 className="ExpSearch-loading">Exp en un solo lugar.</h2> : <h2>Aún no tienes Experiencias...</h2> */}
      {/* } */}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal
  };
};

const mapDispatchToProps = {
  setModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpSearch);
