import React from "react";
import Task  from "./Task"

function TaskList({tasks, onDeleteTask}) {
  const taskData = tasks.map((task) => (
    <Task
      key ={task.id}
      text = {task.text}
      category ={task.category}
      onDeleteTask ={onDeleteTask}
    />
  ))
  return (
    <div className="tasks">
      {taskData}
    </div>
  );
}

export default TaskList;
