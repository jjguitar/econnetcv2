import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchValue, findData } from '../actions/index';

const ExpSearch = ({searchValue, setSearchValue, meetings, loading, findData, load, process}) => {

  useEffect(() => {
    setSearchValue('')
    findData()
  },[]);

  let searched = load === 'meeting' ? meetings : process

  const onSearchValueChange = async (event) => {
    event.preventDefault()
    console.log(event.target.value);
    setSearchValue(event.target.value)
    findData()
  };

  return (
    <React.Fragment>
      {(searched.length > 0) ?
        <input
          className="ExpSearch"
          placeholder={`Busca tus ${load}`}
          value={searchValue}
          onChange={onSearchValueChange}
        /> :
        loading ? <h2 className="ExpSearch-loading">Exp en un solo lugar.</h2> : <h2>Aún no tienes {load}...</h2>
      }
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal,
    meetings: state.meetings,
    process: state.process,
    searchValue: state.searchValue,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  setSearchValue,
  findData
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpSearch);
