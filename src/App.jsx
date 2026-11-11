import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskListView from './components/TaskListView'
import TaskForm from './components/TaskForm'
import TaskSummary from './components/TaskSummary'

const taskListInit = [
  {id:1, title:"do the laundry",description:"wash and dry clothes",isCompleted:false},
  {id:2, title:"clean the house",description:"vacuum and dust",isCompleted:false},
  {id:3, title:"buy groceries",description:"milk, eggs, bread",isCompleted:false},
  {id:4, title:"finish project",description:"complete the final report",isCompleted:false},
];

function App() {
  const [taskList, setTaskList] = useState(taskListInit)

  return (
    <>
     <Header/>
     <TaskListView taskList={taskList} setTaskList={setTaskList}/>
     {/* <TaskSummary taskList={taskList}/>
     <TaskForm taskList={taskList} setTaskList={setTaskList}/> */}
    </>
  )
}

export default App
