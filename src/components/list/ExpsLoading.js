import React from 'react';
import '../../styles/ExpsLoading.css'

const ExpsLoading = ({ error }) => {
  return (
    <div className="LoadingExp-container">
      <span className="Loading-completeIcon"></span>
      <p className="LoadingExp-text">Cargando...</p>
      <span className="LoadingExp-deleteIcon"></span>
    </div>
  )
}

export { ExpsLoading }
