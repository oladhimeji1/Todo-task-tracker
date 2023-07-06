import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";

function App() {

  const [ showAdd, setShowAdd ] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const data = localStorage.getItem('tasks')
    setTasks(JSON.parse(data))
  }, [])

  // Fetching api
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks', { type: 'cors' })
  //   const data = await res.json()

  //   return data;
  // }

  // Delete task
  const deleteTask =  (id) => {

    //  fetch(`/tasks/${id}`, {
    //   method: 'DELETE',
    //   mode: 'cors', 
    //   cache: 'no-cache',
    //   credentials: 'same-origin'})
    
    const deleted = tasks.filter((task) => task.id !== id)
    setTasks(deleted)
    localStorage.setItem('tasks', JSON.stringify(deleted))
  }
  // Add task
  const addTask = async (task) => {

    // const res = await fetch('http://localhost:5000/tasks', {
    //   mode: 'cors'}, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })

    // const data = await res.json()
    const id = Math.floor( Math.random() * 1000 ) + 1
    const newTask = { id, ...task }
    const todo = [ ...tasks, newTask ]
    setTasks([ ...tasks, newTask ])
    localStorage.setItem('tasks', JSON.stringify(todo))
    
  }

  // Toggle Reminder
  const toggleRem = (id) => {
    const reminder = tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    // console.log(reminder)
    setTasks(reminder)
    localStorage.setItem('tasks', JSON.stringify(reminder))
  }
  return (
    
      <div className="container">
        <Header 
        onAdd = { () => setShowAdd(!showAdd) }
        showAddX = { showAdd } 
      />

        { showAdd && <AddTask onAdd = { addTask } />}

        {/* {tasks.length > 0  ? ( */}
        {tasks !== ![]  ? (
          <Tasks tasks = { tasks } 
          onDelete = { deleteTask }
          onToggle = { toggleRem } />
        ) : (
          <div>
            <p> <i className="fa fa-warning"></i> No Task To Show <i className="fa fa-warning"></i></p>
            <small>This project was built with ReactJs, using local storage as the database</small>
            
          </div>
          
          )}
      </div>
    
  );
}

export default App;
