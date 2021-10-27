import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/CreateButton.scss'

const CreateButton = ({setOpenModal}) => {
  // const { setDefaultValue } = useContext(AppContext);
  // const onClickButton = () => {
  //   setDefaultValue('')
  //   props.setOpenModal(prevState => !prevState)
  // }
  return (
    <button
      className="CreateButton"
      onClick={setOpenModal}
    >
        +
    </button>
  );
}

export { CreateButton };