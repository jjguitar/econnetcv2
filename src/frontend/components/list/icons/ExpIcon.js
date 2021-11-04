import React from 'react';
import '../../../styles/ExpIcon.css'
import CheckSVG from '../../../assets/icons/adPerson.png'
import Edit from '../../../assets/icons/pen.svg'
import Delete from '../../../assets/icons/trash.svg'

const iconTypes = {
  'check': onClick => (
    <div
      className='icon-container__div'
      onClick={onClick}
    >
      <img className={"Icon-svg Icon-svg--check"} src={CheckSVG}/>
    </div>
  ),
  'delete': onClick => (
    <div className="menu-item">
      <div className='menu-options'
      onClick={onClick}>
        <img src={Delete} width='20' height='20'/>
      </div>
    </div>
  ),
  'edit': onClick => (
    <div className="menu-item">
      <div className='menu-options'
      onClick={onClick}>
        <img src={Edit} width='20' height='20'/>
      </div>
    </div>
  ),
}

const ExpIcon = ({ type, onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
    >
      {iconTypes[type](onClick)}
    </span>
  )
}

export { ExpIcon };