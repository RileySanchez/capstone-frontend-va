import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import MentalHealth from "./Pages/mentalhealth";
import VAResources from "./Pages/varesources";
import StandDown from "./Pages/standdown";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mentalhealth" element={<MentalHealth />} />
        <Route path="/varesources" element={<VAResources />} />
        <Route path="/standdown" element={<StandDown />} />
      </Routes>
    </Router>
  );
}

export default App;
