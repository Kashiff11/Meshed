import React from "react";
import { Link, Route } from "react-router-dom";

function Home() {
  return (
    <Link to="/">
      <nav className="button-container">
        <Link className="button" to="/create"><h1>Create Task</h1></Link>
        <div className="button" to="/"><h1>Inspirational Quote</h1></div>
        <Link className="button" to="/view"><h1>View Tasks</h1></Link>
      </nav>
    </Link>
    
  )
}

export default Home;