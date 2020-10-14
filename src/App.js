import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Create from "./Create";
import View from "./View"
import Edit from "./Edit"
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [getTasks, setGetTasks] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/family1/`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      });
      setTasks(response.data.records)
    };
    getData();
  }, [getTasks]);

  return (
    <div className="App">
      <div className="navigationBar">
        <Link to="/" style={{ textDecoration: "none" }}><span className="websiteName">Meshed Up Family</span></Link>
        <Link className="button" to="/create">Create Tasks</Link>
        <Link className="button" to="/view">View Tasks</Link>
      </div>
      <div className="main">
        <Route exact path="/view">
          <View tasks={tasks} getTasks={getTasks} setGetTasks={setGetTasks}/>
        </Route>
        <Route exact path="/create">
          <Create getTasks={getTasks} setGetTasks={setGetTasks}/>
        </Route>
        <Route exact path="/update/:task">
          <Edit tasks={tasks} getTasks={getTasks} setGetTasks={setGetTasks} />
        </Route>
      </div>
    </div>
  );
}
export default App; 
