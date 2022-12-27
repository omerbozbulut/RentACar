import React from "react";
import Navbar from "./Components/Navbar.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cars from "./Components/Cars.js";
import SignIn from "./Components/SignIn.js";

function App() {
  return (
    <Router>
      <Routes>
        <Navbar />
        <Route path="/cars" component={Cars} />
        <Route path="/" component={SignIn} />
      </Routes>
    </Router>
  );
}

export default App;
