import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    complete: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: uuidv4() });
    setTask({ ...task, title: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task Title</label>
          <input
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary btn-block">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
