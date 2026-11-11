import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskListView({ taskList, setTaskList }) {
  
  const deleteTask = (evt) => {
    console.log("Delete item no: ", evt.target.id)
    const id = evt.target.id;
    const newTaskList = taskList.filter((task)=>task.id !== Number(id));
    console.log(newTaskList)
    setTaskList(newTaskList);
  }

  return (
    <>
      {taskList.map((task) => {
        return (
          <li key={task.id}>
          <TaskItem task={task} setTaskList={setTaskList}/><button id={task.id} onClick={deleteTask}>Delete</button>
          </li>
      );
      })}
      {/* <TaskItem title={title} description={description} status={status} /> */}
    </>
  );
}

export default TaskListView;
