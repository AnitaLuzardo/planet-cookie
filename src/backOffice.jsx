import React from 'react';
import BackOfficeScreen from './pages/BackOfficeScreen';
import BackOfficeAllProducts from './modules/backOffice/products/screens/BackOfficeAllProducts';
import BackOfficeCreateEdit from './modules/backOffice/products/screens/BackOfficeCreateEdit';
import BackOfficeUsersList from './modules/backOffice/users/screens/BackOfficeUsersList';
import BackOfficeDeleteProduct from './modules/backOffice/products/screens/BackOfficeDeleteProduct';
import BackofficeHome from './modules/backOffice/BackOfficeHome/components/backofficeHome';
import NotFound from './pages/NotFound';
import {
  Routes,
  Route
} from "react-router-dom";

function backOffice() {
  return (
    <>
      <BackOfficeScreen />
      <Routes>  
        <Route exact path="/backoffice" element= {<BackofficeHome/>}/>
        <Route exact path="/backoffice/products" element= {<BackOfficeAllProducts />}/>
        <Route exact path="/backoffice/create&edit" element= {<BackOfficeCreateEdit />} />
        <Route exact path="/backoffice/users" element= {< BackOfficeUsersList/>} />
        <Route exact path="/backoffice/deleteproduct" element= {<BackOfficeDeleteProduct />} />
        <Route exact path="*" element= {<NotFound />} /> 
      </Routes> 
    </>
  )
}

export default React.memo(backOffice)