import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
