import React from 'react';
import { TodoIcon } from './TodoIcon.js'
import '../../../styles/pp.scss'

const EditIcon = ({ onEdit }) => {
  return (
    <TodoIcon
      type='edit'
      onClick={onEdit}
    />
  )
}

export { EditIcon }