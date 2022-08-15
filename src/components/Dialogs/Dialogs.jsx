import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <div className={`${c.dialog} ${c.active}`}>
          <NavLink to="/dialogs/1">Demian</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/2"> Oleg</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/3">Anastasia</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/4">Natalyia</NavLink>
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.dialog}>HI</div>
        <div className={c.dialog}>Hello</div>
        <div className={c.dialog}>Yo</div>
      </div>
    </div>
  )
}
export default Dialogs
