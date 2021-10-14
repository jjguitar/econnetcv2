import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
// import '../../assets/styles/ExpSearch.css'

const ExpSearch = () => {
  const { loading, totalExps, searchValue, setSearchValue } = useContext(AppContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      {(totalExps > 0) ?
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

export { ExpSearch };
