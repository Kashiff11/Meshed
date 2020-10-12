import React from 'react';
import "./View.css"

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
        </div>
      )}
    </div>
  )
}

export default View;