import React from 'react'
import c from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <div className={`${c.dialog} ${c.active}`}>Demian</div>
        <div className={c.dialog}>Oleg</div>
        <div className={c.dialog}>Anastasia</div>
        <div className={c.dialog}>Natalyia</div>
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
