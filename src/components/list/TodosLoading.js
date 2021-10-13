import React from 'react';
import '../../styles/TodosLoading.css'

const TodosLoading = ({ error }) => {
  return (
    <div className="LoadingTodo-container">
      <span className="Loading-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export { TodosLoading }
