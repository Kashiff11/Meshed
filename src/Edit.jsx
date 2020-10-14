import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Create.css";
import { withRouter } from "react-router-dom";

function Edit(props) {

  const [family_member, setFamily_member] = useState("");
  const [task_type, setTask_type] = useState("");
  const [to_do_item, setTo_do_item] = useState("");
  const [date, setDate] = useState("");
  const [additional_notes, setAdditional_notes] = useState("");

  useEffect(() => {
    const updateTask = props.tasks.find((task) => {
      return task.id === props.match.params.task
    })

    if (updateTask) {
      setFamily_member(updateTask.fields.family_member);
      setTask_type(updateTask.fields.task_type);
      setTo_do_item(updateTask.fields.to_do_item)
      setDate(updateTask.fields.date)
      setAdditional_notes(updateTask.fields.additional_notes)
    }
    
  }, []);

  const handleSubmit = async (event) => {
  
    event.preventDefault();
    
    const fields = {
      family_member,
      task_type,
      to_do_item,
      date,
      additional_notes,
    };
   
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/family1/${props.match.params.task}`;
    
    await axios.put(airtableURL, { fields }, { headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}` } });
    
    props.setGetTasks(!props.getTasks);

    props.history.push("/view");
  };


  return (
    <div className="editDiv">
    <form onSubmit={handleSubmit} className="editFormContainer">
      <label htmlFor="family_member">Family Member</label>
      <input
        name="family_member"
        type="text"
        value={family_member}
        onChange={(event) => setFamily_member(event.target.value)}
      /><span className="editTaskCategory">Task Category</span>
      <select
        className="editSelectBar"
        name="task_type"
        value={task_type}
        onChange={(event) => setTask_type(event.target.value)}
      >
        <option></option>
        <option>School</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Health</option>
        <option>Chore</option>
        <option>Travel</option>
        <option>Work</option>
      </select>
      <label htmlFor="to_do_item">To Do Item</label>
      <input
        name="to_do_item"
        type="text"
        value={to_do_item}
        onChange={(event) => setTo_do_item(event.target.value)}
      />
      <label htmlFor="date">Due Date</label>
      <input
        name="date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <label htmlFor="additional_notes">Additional Notes</label>
      <input
        name="additional_notes"
        type="text"
        value={additional_notes}
        onChange={(event) => setAdditional_notes(event.target.value)}
      />
      <button className="editSubmitButton" type="submit">SUBMIT</button>
    </form>
    </div>
  )
}

export default withRouter(Edit);