import React from 'react';
import { ExpIcon } from './ExpIcon.js'
import '../../../styles/pp.scss'

const DeleteIcon = ({ onDelete }) => {
  return (
    <ExpIcon
      type='delete'
      onClick={onDelete}
    />
  )
}

export { DeleteIcon }
