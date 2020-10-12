import React from 'react';
import "./View.css"
import { Link, Route } from "react-router-dom";
import Edit from "./Edit"

function View(props) {

  return (
    <div> 
      {props.tasks.map((task) =>
        <div className="taskContainer">
          <p>{task.fields.family_member}</p>
          <p>{task.fields.task_type}</p>
          <p>{task.fields.to_do_item}</p>
          <p>{task.fields.date}</p>
          <p>{task.fields.additional_notes}</p>
          <Edit task={task} getTasks={props.getTasks} setGetTasks={props.setGetTasks} />
          {/* <Link to="/update">
            <button onClick={() => console.log(`hello`)}>EDIT</button>
          </Link> */}
        </div>
      )}
    </div>
  )
}

export default View;