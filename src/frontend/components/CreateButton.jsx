import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/CreateButton.scss'

const CreateButton = (props) => {
  const { setDefaultValue } = useContext(AppContext);
  const onClickButton = () => {
    setDefaultValue('')
    props.setOpenModal(prevState => !prevState)
  }
  return (
    <button
      className="CreateButton"
      onClick={onClickButton}
    >
        +
    </button>
  );
}

export { CreateButton };