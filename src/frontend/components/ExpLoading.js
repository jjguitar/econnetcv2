import React from 'react';
import '../styles/ExpsLoading.css'

const ExpsLoading = ({ error }) => {
  return (
    <div className="LoadingTodo-container">
      <span className="Loading-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export { ExpsLoading }
