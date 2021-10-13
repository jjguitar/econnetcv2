import React, { useContext } from 'react';
import '../../styles/TodoItem.css'
import { CompleteIcon } from './icons/CompleteIcon.js'
import { DeleteIcon } from './icons/DeleteIcon.js'
import { EditIcon } from './icons/EditIcon.js'
import AppContext from '../../context/AppContext'

const TodoItem = (props) => {

  const { setDefaultValue } = useContext(AppContext)

  const onClickButton = (id) => {
    setDefaultValue(id)
    props.setOpenModal(prevState => !prevState)
  }
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <div className="description">
        <p
          className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
        >
          {props.tittle}
        </p>
        <p className='description-date'>{props.date}</p>
      </div>
      <div className="container">
        <ul className="menu-item__icons">
          <EditIcon
            onEdit={() => onClickButton(props.id)}
          />
          <DeleteIcon
            onDelete={props.onDelete}
          />
        </ul>
      </div>
    </li>
  );
}

export { TodoItem };