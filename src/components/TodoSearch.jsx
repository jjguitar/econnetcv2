import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
// import '../../assets/styles/TodoSearch.css'

const TodoSearch = () => {
  const { loading, totalTodos, searchValue, setSearchValue } = useContext(AppContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      {(totalTodos > 0) ?
        <input
          className="TodoSearch"
          placeholder="Busca tus Experiencias"
          value={searchValue}
          onChange={onSearchValueChange}
        /> :
        loading ? <h2 className="TodoSearch-loading">Todo en un solo lugar.</h2> : <h2>Aún no tienes Experiencias...</h2>
      }
    </React.Fragment>
  );
}

export { TodoSearch };
