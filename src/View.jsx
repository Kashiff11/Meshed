import React from 'react';
import "./View.css"
import { Link } from "react-router-dom";
import axios from "axios";

function View(props) {

  const handleDelete = async () => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/family1/${props.tasks.id}`;
    await axios.delete(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    props.setGetTasks(!props.getReviews);
  };

  return (
    <div> 
      {props.tasks.map((task) =>
        <div className="taskContainer">
          <p>{task.fields.family_member}</p>
          <p>{task.fields.task_type}</p>
          <p>{task.fields.to_do_item}</p>
          <p>{task.fields.date}</p>
          <p>{task.fields.additional_notes}</p>
          <button onClick={handleDelete}>TASK COMPLETED</button>
          <Link to={`/update/${task.id}`}>
            <button>EDIT</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default View;