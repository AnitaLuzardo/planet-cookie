import React from "react";
import './App.css';
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Catalogo from "./modules/products/screens/Catalogo";
import Nosotros from "./pages/Nosotros";
import Contactanos from "./pages/Contactanos";
import Login from "./modules/sessions/screens/Login";
import Register from "./modules/user/screens/Register";
import Detail from "./modules/products/screens/DetalleProduct";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element= {<Home />} />
          <Route exact path="/catalogo" element= {<Catalogo />} />
          <Route exact path="/detail/:id" element= {<Detail />} />
          <Route exact path="/nosotros" element= {<Nosotros />} />
          <Route exact path="/contactanos" element={<Contactanos />}/>
          <Route exact path="/login" element= {<Login />} />
          <Route exact path="/register" element= {<Register />} />
          <Route exact path="*" element= {<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
