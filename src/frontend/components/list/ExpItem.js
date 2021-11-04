import React, { useContext } from 'react';
import '../../styles/ExpItem.css'
import { Link } from 'react-router-dom';
import { CompleteIcon } from './icons/CompleteIcon.js'
import { DeleteIcon } from './icons/DeleteIcon.js'
import { EditIcon } from './icons/EditIcon.js'
import AppContext from '../../context/AppContext'
import { dateFn } from '../../utils/dateFn'
import { deleteMeeting, deleteProcess } from '../../actions/index'
import { connect } from 'react-redux';

const ExpItem = (props) => {
  console.log('props id')
  console.log(props.load)
  const { setDefaultValue } = useContext(AppContext)

  const onEditButton = (id) => {
    // setDefaultValue(id)
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
  deleteMeeting,
  deleteProcess
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpItem);
