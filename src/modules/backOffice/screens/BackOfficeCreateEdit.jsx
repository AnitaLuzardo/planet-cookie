import React from 'react';
import ComponentCreateEdit from '../components/ComponentCreateEdit';
import Style from '../styles/Create&Edit.module.css'

function BackOfficeCreateEdit() {
  return (
    <div className={Style.container}>
      <ComponentCreateEdit />
    </div>
  )
}

export default BackOfficeCreateEdit
