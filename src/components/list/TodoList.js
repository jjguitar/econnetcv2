import React, { useContext } from 'react';
import AppContext from '../../context/AppContext'
import '../../styles/TodoList.css'

const TodoList = (props) => {
  const { error, loading, totalTodos, searchedTodos} = useContext(AppContext)
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {error && props.onError()}
      {loading && props.onLoading()}
      {(!loading && !totalTodos) && props.onEmptyTodos()}
      {!!totalTodos &&  !searchedTodos.length && props.onEmptySearchResults(props.searchText)}

      <ul>
        {searchedTodos.map(renderFunc)}
      </ul>
    </section>
  )
}

export { TodoList };
