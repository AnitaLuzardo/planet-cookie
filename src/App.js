import React from "react";
import './App.css';
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element= {<Home />} />
          <Route exact path="/login" element= {<Login />} />
          <Route exact path="/register" element= {<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
