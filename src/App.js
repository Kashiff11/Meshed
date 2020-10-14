import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Route, Link } from "react-router-dom";
import Quotes from "./Quotes"
import Create from "./Create";
import Introduction from "./Introduction"
import View from "./View"
import Edit from "./Edit"
import PersonalLinks from "./PersonalLinks"
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [getTasks, setGetTasks] = useState(false);

  const [quote, setQuote] = useState();

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

  useEffect(() => {
    const getQuote = async () => {
      const quotesAPIURL = `https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote`;
      const response = await axios.get(quotesAPIURL, {
        headers: {
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
          "x-rapidapi-key":"7af320ac61mshc1924882f1c6503p1e8b90jsnf67f0a263cb2",
          "useQueryString":true
        } 
      });
      setQuote(response.data.author)
      console.log(response.data.author)
    }
    getQuote();
  }, []);


  return (
    <div className="App">
      <div className="navigationBar">
        <Link to="/" style={{ textDecoration: "none" }}><span className="websiteName">Meshed Up Family</span></Link>
        <Link className="button" to="/create">Create Tasks</Link>
        <Link className="button" to="/view">View Tasks</Link>
      </div>
      <div className="main">
        <div className="introMainPage">
          <Route exact path="/">
            <div className="introQuote"><Quotes quote={quote}/></div>
            <div className="introIntroduction"><Introduction /></div>
            <div className="personalLinks"><PersonalLinks/></div>
          </Route>
        </div>
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
