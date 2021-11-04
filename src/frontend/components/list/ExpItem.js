import React, { useContext, useState } from 'react';
import '../../styles/ExpItem.scss'
import { Link } from 'react-router-dom';
import { CompleteIcon } from './icons/CompleteIcon.js'
import { Modal } from '../../components/modal'
import { DeleteIcon } from './icons/DeleteIcon.js'
import { EditIcon } from './icons/EditIcon.js'
import AppContext from '../../context/AppContext'
import { dateFn } from '../../utils/dateFn'
import { deleteMeeting, deleteProcess, setDefaultValue, setModal } from '../../actions/index'
import { connect } from 'react-redux';

const ExpItem = (props) => {
  console.log('props id')
  console.log(props.load)
  const [openModal, setOpenModal] = React.useState(false);

  const onEditButton = (id) => {
    props.setDefaultValue(id)
    props.setModal()
    // props.setOpenModal(prevState => !prevState)
  }

  const onDeleteButton = (id) => {
    const body = {
    id: id,
    }
    console.log(body)
    if (props.load === 'meeting') {
      props.deleteMeeting(body)
    } else {
      console.log('process')
      props.deleteProcess(body)
    }
    setOpenModal(false)
  }

  return (
    <li className="ExpItem">
      <Link to={`/process/${props.id}`}>
        <CompleteIcon
          completed={props.completed}
          // onComplete={() => onEditButton(props.id)}
        />
      </Link>
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
            onEdit={() => onEditButton(props.id)}
          />
          <DeleteIcon
            onDelete={() => setOpenModal(true)}
          />
        </ul>
      </div>
      {openModal &&
        <Modal>
          <form className="form-container__confirm">
            <h1 className="confirm-title">¿Eliminar la tarea?</h1>
            <h3>¿Estás seguro de eliminar la tarea {props.tittle} con fecha del {dateFn(props.date)}?</h3>
            <h3 className='warning-confirm'>Una vez realizada, la acción no se puede deshacer</h3>
            <div className='button-container__confirm'>
              <button
                className='cancel button-confirm'
                onClick={()=> setOpenModal(false)}
              >
                Volver
              </button>
              <button
                className='delete button-confirm'
                onClick={()=> onDeleteButton(props.id)}
              >
                Eliminar
              </button>
            </div>

          </form>
        </Modal>
      }
    </li>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal
  };
};

const mapDispatchToProps = {
  deleteMeeting,
  deleteProcess,
  setModal,
  setDefaultValue
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpItem);
