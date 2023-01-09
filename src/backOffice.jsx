import React from 'react';
import BackOfficeScreen from './pages/BackOfficeScreen';
import BackOfficeAllProducts from './modules/backOffice/products/screens/BackOfficeAllProducts';
import BackOfficeCreateEdit from './modules/backOffice/products/screens/BackOfficeCreateEdit';
import BackOfficeUsersList from './modules/backOffice/users/screens/BackOfficeUsersList';
import BackOfficeDeleteProduct from './modules/backOffice/products/screens/BackOfficeDeleteProduct';
import {
  Routes,
  Route
} from "react-router-dom";

function backOffice() {
  return (
    <Routes>  
      <Route exact path="/backoffice" element= {<BackOfficeScreen />} />
      <Route exact path="/backoffice/products" element= {<BackOfficeAllProducts />}/>
      <Route exact path="/backoffice/create&edit" element= {<BackOfficeCreateEdit />} />
      <Route exact path="/backoffice/users" element= {< BackOfficeUsersList/>} />
      <Route exact path="/backoffice/deleteproduct" element= {<BackOfficeDeleteProduct />} /> 
    </Routes> 
  )
}

export default backOffice