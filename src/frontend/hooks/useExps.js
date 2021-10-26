import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage.js'
import { idGenerator } from '../utils/KeyGenerator.js'

const useExps = async () => {
  const {
    item: exps,
    saveItem: saveExps,
    loading,
    error,
  } = useLocalStorage('EXPS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [defaultValue, setDefaultValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false)
  const completedExps = exps.filter(exp => !!exp.completed).length
  const totalExps = exps.length

  let searchedExps = []

  if(!searchValue.length >= 1) {
    searchedExps = exps
  } else {
    searchedExps = exps.filter(exp => {
      const expText = exp.tittle.toLowerCase()
      const searchedText = searchValue.toLowerCase()

      return expText.includes(searchedText)
    })
  }

  const findIndex = (id) => {
    return exps.findIndex(exp => exp.id === id)
  }

  const findData = (id) => {
    const newExps = [...exps]
    return newExps.splice(findIndex(id), 1)
  }

  const toggleExp = (id) => {

    const newExps = [...exps]
    newExps[findIndex(id)].completed = !newExps[findIndex(id)].completed
    saveExps(newExps)
  }

  const deleteExp = (id) => {
    const newExps = [...exps]
    newExps.splice(findIndex(id), 1)
    saveExps(newExps)
  }

  const addExp = ({tittle, date, description, isVolunteerRequired}) => {
    const newExps = [...exps]
    newExps.push({
      id: idGenerator(),
      tittle,
      date,
      description,
      isVolunteerRequired,
    })
    saveExps(newExps)
  }

  const editExp = (experience, id) => {
    console.log(id)
    const newExps = [...exps]
    newExps[findIndex(id)] = {
      id: idGenerator(),
      tittle: experience.tittle,
      date: experience.date,
      description: experience.description,
      isVolunteerRequired: experience.isVolunteerRequired,
    }
    saveExps(newExps)
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
      completedExps,
      searchValue,
      totalExps,
      searchedExps,
      setSearchValue,
      toggleExp,
      addExp,
      deleteExp,
      openModal,
      setOpenModal,
      state,
      addToCart,
      removeFromCart,
      defaultValue,
      setDefaultValue,
      findData,
      editExp
    }
  )
}

export { useExps }

