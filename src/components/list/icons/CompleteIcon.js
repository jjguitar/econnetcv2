import React from 'react';
import { ExpIcon } from './ExpIcon.js'

const CompleteIcon = ({ completed, onComplete }) => {

  return (
    <ExpIcon
      type='check'
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  )
}

export { CompleteIcon }
