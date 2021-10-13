import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage.js'
import { idGenerator } from '../utils/KeyGenerator.js'

const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [defaultValue, setDefaultValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if(!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.tittle.toLowerCase()
      const searchedText = searchValue.toLowerCase()

      return todoText.includes(searchedText)
    })
  }

  const findIndex = (id) => {
    return todos.findIndex(todo => todo.id === id)
  }

  const findData = (id) => {
    const newTodos = [...todos]
    return newTodos.splice(findIndex(id), 1)
  }

  const toggleTodo = (id) => {

    const newTodos = [...todos]
    newTodos[findIndex(id)].completed = !newTodos[findIndex(id)].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    console.log(id)
    const newTodos = [...todos]
    newTodos.splice(findIndex(id), 1)
    saveTodos(newTodos)
  }

  const addTodo = ({tittle, date, description, isVolunteerRequired}) => {
    const newTodos = [...todos]
    newTodos.push({
      id: idGenerator(),
      tittle,
      date,
      description,
      isVolunteerRequired,
    })
    saveTodos(newTodos)
  }

  const editTodo = (experience, id) => {
    console.log(id)
    const newTodos = [...todos]
    newTodos[findIndex(id)] = {
      id: idGenerator(),
      tittle: experience.tittle,
      date: experience.date,
      description: experience.description,
      isVolunteerRequired: experience.isVolunteerRequired,
    }
    saveTodos(newTodos)
  }

  const initialState = {
    cart: [],
  }

  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  }

  return (
    {
      loading,
      error,
      completedTodos,
      searchValue,
      totalTodos,
      searchedTodos,
      setSearchValue,
      toggleTodo,
      addTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      state,
      addToCart,
      removeFromCart,
      defaultValue,
      setDefaultValue,
      findData,
      editTodo
    }
  )
}

export { useTodos }

