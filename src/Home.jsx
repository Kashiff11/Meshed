import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
      <nav>
        <Link className="button" to="/create">Create Tasks</Link>
        <Link className="button" to="/view">View Tasks</Link>
      </nav>
  )
}

export default Home;