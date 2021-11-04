import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getHash from '../utils/getHash';
import UsersList from '../components/UsersList'
import { dateFn } from '../utils/dateFn';
import { loadUsers, registerUserToProcess } from '../actions';
import '../styles/AssignUsers.scss';
// import NotFound from './NotFound';

const Process = ({ process, history, loadUsers, users, registerUserToProcess }) => {

  useEffect(() => {
    loadUsers()
  },[]);

  let hash = getHash()
  // console.log(hash)
  let processId = process.filter(proc => proc.id === Number(hash))
  // console.log(processId[0])
  let leader = processId[0] ? users.find(user => user.id === processId[0].userId) : false ;
  // console.log(leader)
  processId[0] ? console.log(processId[0].usersProcess) : console.log('nine')

  const onSubmit = (event) => {
    event.preventDefault()
    const target = event.target
    // console.log(target.tittle)
    let userToProcess = {
      id_process: processId[0].id,
      id_user: Number(target.userId.value),
    }
    console.log(userToProcess)
    // setLoad(true)
    registerUserToProcess(userToProcess, hash)
    // registerProcess(process, hash)
  }

  return (
      <section className='assign-container'>

        {processId[0] ?
          <h1>{processId[0].name}</h1>
          :
          <h1>Cargando:</h1>
        }

        <p className="assign__subtitle">Description:</p>
        {processId[0] ?
          <p className='assign__description'>
            {processId[0].description}
          </p>
        : <p className='assign__description'>
        Cargando:
          </p>}

        <p className="assign__subtitle">Inicio:</p>

        {processId[0] ?
          <p className="assign__date">{dateFn(processId[0].date)}</p>
          :
          <p className="assign__date">Cargando</p>
        }

        {processId[0] &&
          processId[0].open ?
          <p className="assign__status">Actualmente: Abierto</p>
          :
          <p className="assign__status">Actualmente: Cerrado</p>
        }

        <p className="assign__subtitle">Líder:</p>
        {processId[0] && leader.name && typeof leader.name !== 'undefined' ?
          <p className="assign__leader">{leader.name.toUpperCase()}</p>
          :
          <p className="assign__leader">Cargando</p>
        }

        <form
          onSubmit={onSubmit}
          className='assign__form'
        >
          <label className="date">Por favor elige un miembro para asignar al proceso:</label>
          <div className="content-select">
            {processId[0] &&
              <select className="" name="userId" required>
                {users.map(user =>
                  <option value={user.id} key={user.id}>{user.name.toUpperCase()}</option>
                )}
              </select>
            }
          </div>
          <div className="assign-button__container">
            <button
              className='back-button'
              type='button'
              onClick={() => history.goBack()}
            >
              Regresar
            </button>
            <button
              className='back-button white'
              type='submit'
              disabled={processId[0] ? !(processId[0].open) : false}
            >
              Asignar
            </button>
          </div>
        </form>

        <p className="assign__subtitle">Personas asignadas al proceso:</p>
        {processId[0] ?
          processId[0].usersProcess.length > 0 ?
            processId[0].usersProcess.map((user) =>
              <UsersList key={user.id} data={user}/>
            )
            :
            <p>Aún no hay personas asignadas a este proceso.</p>
          :
          null
        }
      </section>
    )
};

const mapStateToProps = (state) => {
  return {
    process: state.process,
    users: state.users,
  };
};

const mapDispatchToProps = {
  loadUsers,
  registerUserToProcess
};

export default connect(mapStateToProps, mapDispatchToProps)(Process);