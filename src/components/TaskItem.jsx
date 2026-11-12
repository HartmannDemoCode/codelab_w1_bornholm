import { useState } from 'react'

function TaskItem({ taskProp, setTaskList, updateTask }) {
  const [task, setTask] = useState(taskProp);
  const {id, title, description, isCompleted} = taskProp;

  const handleChange = (evt) => { // TODO: Færdiggør herfra
    // console.log(evt.target.checked);
    const status = evt.target.checked;
    console.log("status: ",status)
    
    setTask({...task, isCompleted:status})
  }

  return (
    
    <p>{title} <input type="checkbox" onChange={handleChange}></input></p>
    
  )
}

export default TaskItem
