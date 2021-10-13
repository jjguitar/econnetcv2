import React, { useContext } from 'react';
import { CreateButton } from '@components/CreateButton';
import { TodoSearch } from '@components/TodoSearch';
import { Modal } from '@components/modal';
import { Form } from '@components/Form';
import { TodoList } from '../components/list/TodoList.js'
import { TodosError } from '../components/list/TodosError.js'
import { TodosLoading } from '../components/list/TodosLoading.js'
import { EmptyTodos } from '../components/list/EmptyTodos.js'
import { TodoItem } from '../components/list/TodoItem.js'
import AppContext from '../context/AppContext';
import '@styles/Experiences.scss';

const Experiences = () => {
  const {
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    searchValue,
  } = useContext(AppContext)
	return (
		<div className="Experience">
      <h1>Experiencias</h1>
      <TodoSearch/>

      <TodoList
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        searchText={searchValue}

        onEmptySearchResults={(searchText) => (
          <p className="NotFoundMessage">No hay resultado para {searchText} </p>
        )}
      >
        {todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            tittle={todo.tittle}
            date={todo.date}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            setOpenModal={setOpenModal}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}
      <CreateButton
        setOpenModal={setOpenModal}
      />
		</div>
	);
}

export { Experiences };
