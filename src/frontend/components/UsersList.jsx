import React, { useContext } from 'react';
import '../styles/ExpItem.css'
// import { Link } from 'react-router-dom';
// import { CompleteIcon } from './icons/CompleteIcon.js'
import { DeleteIcon } from '../components/list/icons/DeleteIcon'
import { EditIcon } from '../components/list/icons/EditIcon.js'
// import AppContext from '../../context/AppContext'
// import { dateFn } from '../../utils/dateFn'
import { deleteMeeting, deleteProcess, deleteUserProcess } from '../actions/index'
import { connect } from 'react-redux';

const UsersList = ({data, users, deleteUserProcess}) => {
  console.log(data)
  console.log(users.find(user => user.id === data.id).name)
  // const { setDefaultValue } = useContext(AppContext)

  // const onEditButton = (id) => {
  //   // setDefaultValue(id)
  //   // props.setOpenModal(prevState => !prevState)
  // }

  const onDeleteButton = () => {
    console.log(data)
    const body = {
      id_user: data.ProcessUser.id_user,
      id_process: data.ProcessUser.id_process,
    }
    console.log(body)
    deleteUserProcess(body, data.ProcessUser.id_process)
    // if (props.load === 'meeting') {
    //   props.deleteMeeting(body)
    // } else {
    //   console.log('process')
    //   props.deleteProcess(body)
    // }
  }

  return (
    <li className="ExpItem User-list">
      {/* <Link to={`/process/${props.id}`}>
        <CompleteIcon
          completed={props.completed}
          // onComplete={() => onEditButton(props.id)}
        />
      </Link> */}
      <div className="description">
        <p
          className={`ExpItem-p`}
        >
          {users.find(user => user.id === data.id).name.toUpperCase()}
        </p>
        <p className='description-date'>
        {/* {dateFn(props.date)} */}
        </p>
      </div>
      <div className="container">
        <ul className="menu-item__icons">
          <DeleteIcon
            onDelete={() => onDeleteButton()}
          />
        </ul>
      </div>
    </li>
  );
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal,
    users: state.users,
  };
};

const mapDispatchToProps = {
  deleteMeeting,
  deleteProcess,
  deleteUserProcess
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
