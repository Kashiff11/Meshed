import React from 'react';
import { Route, Link } from "react-router-dom";
import Create from "./Create";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="logo-container">
        <div><h4>meshedFamily</h4></div>    
      </header>
      <banner className="App-header">Banner</banner>
      <nav className="button-container">
        <Link className="button" to="/create"></Link>
        <Link className="button" to="/inspiration"></Link>
        <Link className="button" to="/view"></Link>
      </nav>
      <main>
        <Route path="/create">
          <Create/>
        </Route>
      </main>
      
      
      <footer>FOOTER TEXT HERE</footer>
    </div>
  );
}
export default App; 
