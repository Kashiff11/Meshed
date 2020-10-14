import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

function View(props) {

  const handleDelete = async (taskID) => {
    console.log(props)
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/family1/${taskID}`;
    await axios.delete(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    props.setGetTasks(!props.getTasks);
  };

  return (
    <div clasName="taskList"> 
      {props.tasks.map((task) =>
        <div className="taskContainer">
          <p>Who: {task.fields.family_member}</p>
          <p>Category: {task.fields.task_type}</p>
          <p>Task: {task.fields.to_do_item}</p>
          <p>Due Date: {task.fields.date}</p>
          <p>Notes: {task.fields.additional_notes}</p>
          <button className="viewPageButton" onClick={() => handleDelete(task.id)}>TASK COMPLETED</button>
          <Link to={`/update/${task.id}`}>
            <button className="viewPageButton">EDIT</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default View;