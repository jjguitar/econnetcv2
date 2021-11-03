import React, { useContext } from 'react';
import '../../styles/ExpItem.css'
import { CompleteIcon } from './icons/CompleteIcon.js'
import { DeleteIcon } from './icons/DeleteIcon.js'
import { EditIcon } from './icons/EditIcon.js'
import AppContext from '../../context/AppContext'
import { dateFn } from '../../utils/dateFn'
import { deleteMeeting } from '../../actions/index'
import { connect } from 'react-redux';

const ExpItem = (props) => {
  console.log('props id')
  console.log(props)
  const { setDefaultValue } = useContext(AppContext)

  const onClickButton = (id) => {
    setDefaultValue(id)
    props.setOpenModal(prevState => !prevState)
  }

  const onDeleteButton = (id) => {
    const body = {
      id: id,
    }
    console.log(body)
    props.deleteMeeting(body)
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
        <p className='description-date'>{dateFn(props.date)}</p>
      </div>
      <div className="container">
        <ul className="menu-item__icons">
          <EditIcon
            onEdit={() => onClickButton(props.id)}
          />
          <DeleteIcon
            onDelete={() => onDeleteButton(props.id)}
          />
        </ul>
      </div>
    </li>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal
  };
};

const mapDispatchToProps = {
  deleteMeeting
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpItem);
