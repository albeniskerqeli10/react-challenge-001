import React, { useState } from "react";
import "./style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="app">
      <div className="app__container">
        <Navbar />
        <Home />
      </div>
    </main>
  );
};

export default App;
