import React from 'react';
import { Route } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import View from "./View"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="logo-container"><div><h5>meshedFamily</h5></div></header>
      <banner className="App-header">Banner</banner>
      <Route exact path="/"><Home/></Route>
      <main>
        <Route path="/create"><Create /></Route>
        <Route path="/view"><View /></Route>
      </main>
      
      
      <footer>FOOTER TEXT HERE</footer>
    </div>
  );
}
export default App; 
