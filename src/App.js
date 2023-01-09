import React, { useEffect, useState } from "react";
import './App.css';
import EcommerceRoute from "./ecommerceRoute";
import BackOffice from "./backOffice"
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const [backoffice, setBackoffice] = useState(false)

  useEffect(() => {
    if (location.pathname.includes('/backoffice') && !backoffice) {
      setBackoffice(true)
    } else if (!location.pathname.includes('/backoffice') && backoffice) {
      setBackoffice(false)
    }
  }, [location, backoffice])

  return (
    <>
      {backoffice ? (
       <BackOffice />
      ) : (
        <EcommerceRoute/>
      )}
    </>
  );
}

export default App;
