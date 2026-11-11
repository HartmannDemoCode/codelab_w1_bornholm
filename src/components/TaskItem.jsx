import { useState } from 'react'

function TaskItem({ task, setTaskList }) {
  const {id, title, description, isCompleted} = task;

  const handleChange = (evt) => {
    console.log(evt.target.checked);
    const status = evt.target.checked;
    task.isCompleted = status;

  }

  return (
    
    <p>{title} <input type="checkbox" onChange={handleChange}></input></p>
    
  )
}

export default TaskItem
