import React from 'react';
import BackOfficeMenu from '../components/BackOfficeMenu'; 
import ItemMenu from '../components/helpers/menuBackOffice'

function BackOfficeScreen() {
  return (
    <BackOfficeMenu items= {ItemMenu} />
  )
}

export default BackOfficeScreen
