import React, { useState } from "react";
import axios from "axios";
import "./Create.css"

function Edit(props) {

  const [family_member, setFamily_member] = useState(props.task.fields.family_member);
  const [task_type, setTask_type] = useState(props.task.fields.task_type);
  const [to_do_item, setTo_do_item] = useState(props.task.fields.to_do_item);
  const [date, setDate] = useState(props.task.fields.date);
  const [additional_notes, setAdditional_notes] = useState(props.task.fields.additional_notes);

  const handleSubmit = async (event) => {

    event.preventDefault();

    const fields = {
      family_member,
      task_type,
      to_do_item,
      date,
      additional_notes,
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/family1/${props.task.id}`;
    
    await axios.put(airtableURL, { fields }, { headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}` } });
    
    props.setGetTasks(!props.getTasks);

    setFamily_member("");
    setTask_type("");
    setTo_do_item("");
    setDate("");
    setAdditional_notes("");
  };


  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <label htmlFor="family_member">Family Member</label>
      <input
        name="family_member"
        type="text"
        value={family_member}
        onChange={(event) => setFamily_member(event.target.value)}
      />
      <select
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
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default Edit;