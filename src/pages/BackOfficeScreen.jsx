import React from 'react';
import BackOfficeMenu from '../modules/backOffice/BackOfficeMenu/BackOfficeMenu'; 
import ItemMenu from '../modules/backOffice/BackOfficeMenu/helpers/menuBackOffice'

function BackOfficeScreen() {
  return (
    <BackOfficeMenu items= {ItemMenu} />
  )
}

export default BackOfficeScreen
