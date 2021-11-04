import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { setModal, findData, registerMeeting, setLoad, loadUsers, registerProcess } from '../actions/index'
import '../styles/Form.css'
import AppContext from '../context/AppContext';

const FormProcess = ({findData, defaultValue, setModal, users, registerProcess}) => {
  // const { addExp, setOpenModal, defaultValue, findData, editExp } = useContext(AppContext)

  const [warningValue, setWarningValue] = React.useState(false)

  let defaultValues = {}
  if (defaultValue !== '') {
    defaultValues = findData(defaultValue)
  }
  const onCancel = () => {
    setModal()
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const target = event.target
    // console.log(target.tittle)
    let process = {
      name: target.tittle.value,
      date: target.date.value,
      description: target.description.value,
      open: target.open.value,
      userId: target.userId.value,
    }
    console.log(process)
    if (defaultValue === '') {
      setLoad(true)
      registerProcess(process)
    } else {
      // editExp(process, defaultValue)
    }
    // setModal(false)
    setWarningValue(false)
  }

  const dateTodayFn = () => {
    let format = 'yyyy-mm-dd'
    const time = Date.now();
    const dateToday = new Date(time);
    // console.log(dateToday)
    const map = {
        dd: dateToday.getDate() < 9 ? `0${dateToday.getDate()}` : dateToday.getDate(),//agregar cero si es menor a 9
        mm: dateToday.getMonth() + 1,
        yyyy: dateToday.getFullYear()
    }
    console.log(format.replace(/dd|mm|yyyy/gi, matched => map[matched]))
    return format.replace(/dd|mm|yyyy/gi, matched => map[matched])
  }

  const valuesDefault = ['Lifetrack',
  'Experiencia RX', 'Romanos', 'Corazón saludable', 'Pre-Matrimonial', 'Matrimonial']

  const activeSelect = () => {
    const found = valuesDefault.find(element => element === (defaultValue !== '' ? defaultValues[0].tittle : ''));

    return found
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="center">¿Qué tipo de proceso quieres crear?</h2>
      {warningValue && (
        <p className="Warning-text">Para continuar, por favor escribe el detalle de la experiencia.</p>
      )}
      <div className="content-select">
        <select className="" name="tittle" required defaultValue={defaultValue !== '' ? activeSelect() : valuesDefault[0]}>
          {valuesDefault.map((values) => <option value={values} key={values}>{values}</option>)}
        </select>
      </div>

      <label className="date" htmlFor="start">Start date:</label>

      <input className="date-form" name='date' type="date" id="start"
        defaultValue={dateTodayFn()}
        min="2018-01-01"
        required
      />
      <textarea
        name='description'
        autoFocus={defaultValue !== '' ? false : true}
        placeholder='Escribe una descripción para el proceso'
        required
        defaultValue={defaultValue !== '' ? defaultValues[0].description : ''}
      />

      <p className="volunteer">¿Proceso abierto?:</p>
      <label htmlFor="volunteer">
        <input
          type="radio"
          name="open"
          value='1'
          required
          defaultChecked={defaultValue !== '' ? (defaultValues[0].isVolunteerRequired === '1') : true}
        />SI
        <input
          type="radio"
          name="open"
          value='2'
          required
          defaultChecked={defaultValue !== '' ? !(defaultValues[0].isVolunteerRequired === '1') : false}
        />NO
      </label>


      <label className="date">Por favor elige un líder</label>
      <div className="content-select">
        <select className="" name="userId" required defaultValue={defaultValue !== '' ? activeSelect() : valuesDefault[0]}>
          {users.map(user =>
            <option value={user.id} key={user.id}>{user.name.toUpperCase()}</option>
          )}
        </select>
      </div>

      <div className="ExpForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="ExpForm-button ExpForm-button-cancel"
        >
          Cancelar
        </button>
        <button
          type='submit'
          className="ExpForm-button ExpForm-button-add"
        >
          {defaultValue !== '' ? 'Actualizar' : 'Añadir'}
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    defaultValue: state.defaultValue,
    users: state.users,
  };
};

const mapDispatchToProps = {
  setModal,
  findData,
  registerMeeting,
  setLoad,
  loadUsers,
  registerProcess
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProcess);