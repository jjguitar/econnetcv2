import React from 'react';
import { ExpIcon } from './ExpIcon.js'
import '../../../styles/pp.scss'

const EditIcon = ({ onEdit }) => {
  return (
    <ExpIcon
      type='edit'
      onClick={onEdit}
    />
  )
}

export { EditIcon }