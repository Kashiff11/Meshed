import React from 'react';
import "./View.css"

function View(props) {

  return (
    <div> 
      {props.tasks.map((task) =>
        <div className="taskContainer">
          <p>{task.fields.family_member}</p>
          <p>{task.fields.task}</p>
          <p>{task.fields.to_do_item}</p>
        </div>
      )}
    </div>
  )
}

export default View;