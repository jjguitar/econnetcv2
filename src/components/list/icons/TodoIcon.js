import React from 'react';
import '../../../styles/TodoIcon.css'
import CheckSVG from '@icons/Vector.svg'
import Edit from '@icons/pen.svg'
import Delete from '@icons/trash.svg'

const iconTypes = {
  'check': () => (
    <div className='icon-container__div'>
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

const TodoIcon = ({ type, onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
    >
      {iconTypes[type](onClick)}
    </span>
  )
}

export { TodoIcon };