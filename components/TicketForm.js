import React, { useState } from "react";

export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [desciption, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLables = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // resticts the reloading of page, when the submit button is clicked

    const ticketData = {
      id: Date.now().toString(36),
      title,
      desciption,
      priority,
    };

    dispatch({
      type: "ADD_TICKET",
      payload: ticketData,
    });

    clearForm();

    console.log(ticketData.id);
    console.log(ticketData.title);
    console.log(ticketData.priority);
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Desciption</label>
        <textarea
          type="text"
          value={desciption}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <fieldset className="priority-fieldset">
        <legend>Priority</legend>

        {Object.entries(priorityLables).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="priority-input"
              onChange={(e) => setPriority(e.target.value)}
            ></input>
            {label}
          </label>
        ))}
      </fieldset>

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
