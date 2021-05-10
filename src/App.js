import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const LOCAL_STORAGE_KEY = "react-task-tracker-list";

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // getter
    const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (tasks) setTaskList(tasks);
  }, []);

  useEffect(() => {
    // setter
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
  }, [taskList]);

  const addTask = (task) => {
    setTaskList([task, ...taskList]);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-primary text-center m-5"> Task Tracker </h1>
      </div>
      <div className="col-4 offset-4">
        <TaskForm addTask={addTask} />
        <TaskList
          tasks={taskList}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default App;
