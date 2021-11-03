import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { setModal, findData, registerMeeting, setLoad } from '../actions/index'
import '../styles/Form.css'
import AppContext from '../context/AppContext';

const Form = ({findData, defaultValue, setModal, registerMeeting, setLoad}) => {
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
    console.log(target.tittle)
    let experience = {
      tittle: target.tittle.value,
      date: target.date.value,
      description: target.description.value,
      isVolunteerRequired: target.isVolunteerRequired.value,
      idTitle: target.tittle.defaultValue
    }
    // console.log(experience)
    if (defaultValue === '') {
      setLoad(true)
      registerMeeting(experience)
    } else {
      editExp(experience, defaultValue)
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
        dd: dateToday.getDate(),//agregar cero si es menor a 9
        mm: dateToday.getMonth() + 1,
        yyyy: dateToday.getFullYear()
    }
    console.log(format.replace(/dd|mm|yyyy/gi, matched => map[matched]))
    return format.replace(/dd|mm|yyyy/gi, matched => map[matched])
  }

  const valuesDefault = ['Experiencia de DOMINGO',
  'Un mismo corazón', 'Romanos', 'Oración de madrugada', 'Aseo general', 'Taller RX']
  const activeSelect = () => {
    const found = valuesDefault.find(element => element === (defaultValue !== '' ? defaultValues[0].tittle : ''));

    return found
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="center">¿Qué tipo de Experiencia quieres crear?</h2>
      {warningValue && (
        <p className="Warning-text">Para continuar, por favor escribe el detalle de la experiencia.</p>
      )}
      <div className="content-select">
        <select className="" name="tittle" required defaultValue={defaultValue !== '' ? activeSelect() : valuesDefault[0]}>
          <option value={valuesDefault[0]}>Experiencia de DOMINGO</option>
          <option value={valuesDefault[1]}>Un mismo corazón</option>
          <option value={valuesDefault[2]}>Romanos</option>
          <option value={valuesDefault[3]}>Oración de madrugada</option>
          <option value={valuesDefault[4]}>Aseo general</option>
          <option value={valuesDefault[5]}>Taller RX</option>
        </select>
        <i></i>
      </div>

      <label className="date" htmlFor="start">Start date:</label>

      <input name='date' type="date" id="start"
        defaultValue={dateTodayFn()}
        // defaultValue={'2021-11-02'}
        // defaultValue={defaultValue !== '' ? defaultValues[0].date : dateTodayFn()}
        //2021-11-2
        min="2018-01-01"
        required
      />
      <textarea
        name='description'
        autoFocus={defaultValue !== '' ? false : true}
        placeholder='Escribe una nueva tarea'
        required
        defaultValue={defaultValue !== '' ? defaultValues[0].description : ''}
      />

      <p className="volunteer">¿Requiere voluntarios?:</p>
      <label htmlFor="volunteer">
        <input
          type="radio"
          name="isVolunteerRequired"
          value='1'
          required
          defaultChecked={defaultValue !== '' ? (defaultValues[0].isVolunteerRequired === '1') : true}
        />SI
        <input
          type="radio"
          name="isVolunteerRequired"
          value='2'
          required
          defaultChecked={defaultValue !== '' ? !(defaultValues[0].isVolunteerRequired === '1') : false}
        />NO
      </label>


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
    defaultValue: state.defaultValue
  };
};

const mapDispatchToProps = {
  setModal,
  findData,
  registerMeeting,
  setLoad
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);