import React from "react";
import { useState } from "react";
const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const id = Math.random();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert("add some task");
      return;
    }
    addTask({ id, text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add tasks"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day and Time</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="form-control">
        <button className="btn btn-block" type="submit">
          Save task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
