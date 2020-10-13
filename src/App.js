import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Route } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
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
      <header className="logo-container"><div><h5>meshedFamily</h5></div></header>
      <header className="App-header">Banner</header>
      <Route exact path="/"><Home/></Route>
      <main>
        <Route exact path="/create">
          <Create getTasks={getTasks} setGetTasks={setGetTasks}/>
        </Route>
        <Route exact path="/view">
          <View tasks={tasks} getTasks={getTasks} setGetTasks={setGetTasks}/>
        </Route>
        <Route exact path="/update/:task">
            <Edit tasks={tasks} getTasks={getTasks} setGetTasks={setGetTasks} />
        </Route>
      </main>
      
      
      <footer>FOOTER TEXT HERE</footer>
    </div>
  );
}
export default App; 
