import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <div
      className={task.complete ? "alert alert-success" : "alert alert-primary"}
    >
      {task.title}
      <span className="float-right">
        {task.complete !== true ? (
          <button
            onClick={(e) => completeTask(task.id)}
            className="btn btn-sm btn-success mr-2"
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        ) : (
          ""
        )}

        <button
          onClick={(e) => deleteTask(task.id)}
          className="btn btn-sm btn-danger mr-2"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </span>
    </div>
  );
};

export default Task;
