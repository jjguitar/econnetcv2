import React from 'react';
import { TodoIcon } from './TodoIcon.js'
import '../../../styles/pp.scss'

const DeleteIcon = ({ onDelete }) => {
  return (
    <TodoIcon
      type='delete'
      onClick={onDelete}
    />
  )
}

export { DeleteIcon }
