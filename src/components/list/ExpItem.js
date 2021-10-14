import React, { useContext } from 'react';
import '../../styles/ExpItem.css'
import { CompleteIcon } from './icons/CompleteIcon.js'
import { DeleteIcon } from './icons/DeleteIcon.js'
import { EditIcon } from './icons/EditIcon.js'
import AppContext from '../../context/AppContext'

const ExpItem = (props) => {

  const { setDefaultValue } = useContext(AppContext)

  const onClickButton = (id) => {
    setDefaultValue(id)
    props.setOpenModal(prevState => !prevState)
  }
  return (
    <li className="ExpItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <div className="description">
        <p
          className={`ExpItem-p ${props.completed && 'ExpItem-p--complete'}`}
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

export { ExpItem };