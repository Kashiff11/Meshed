import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="logo-container">
        <div><h4>meshedFamily</h4></div>    
      </header>
      <banner className="App-header">Banner</banner>
      <main className="button-container">
        <div className="button">
          <h2 className = "button-text">Create</h2>
        </div>
        <div className="button">
          <h2 className = "button-text">Inspiration</h2>
        </div>
        <div className="button">
          <h2 className = "button-text">View</h2>
        </div>
      </main>
      <footer>To come</footer>
    </div>
  );
}
export default App; 
