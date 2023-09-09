import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";

function App() {

  const [ showAdd, setShowAdd ] = useState(false);
  const [tasks, setTasks] = useState([])
  
  const data = JSON.parse(localStorage.getItem('tasks'));

  useEffect(() => {
    console.log(tasks)
    console.log(data)
    setTasks(data);
  }, [])

  // Delete task
  const deleteTask =  (id) => {

    const deleted = tasks.filter((task) => task.id !== id)
    setTasks(deleted)
    localStorage.setItem('tasks', JSON.stringify(deleted))
  }
  // Add task
  const addTask = async (task) => {

    const id = Math.floor( Math.random() * 1000 ) + 1
    const newTask = { id, ...task }
    
    setTasks([ ...tasks, newTask ])
    localStorage.setItem('tasks', JSON.stringify([ ...tasks, newTask ]));
  }

  // Toggle Reminder
  const toggleRem = (id) => {
    const reminder = tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    setTasks(reminder)
    localStorage.setItem('tasks', JSON.stringify(reminder))
  }

  if((tasks.length === 0 || tasks === null) && (data.length === 0 || data === null)){
    
  return (
    
      <div className="container">
        <Header 
        onAdd = { () => setShowAdd(!showAdd) }
        showAddX = { showAdd } 
      />

        { showAdd && <AddTask onAdd = { addTask } />}

          <div>
            <p> <i className="fa fa-warning"></i> No Task To Show <i className="fa fa-warning"></i></p>
            <small>This project was built with ReactJs, using local storage as the database</small>
            
          </div>
          
      </div>
  );
}
  return (
    
      <div className="container">
        <Header 
        onAdd = { () => setShowAdd(!showAdd) }
        showAddX = { showAdd } 
      />

        { showAdd && <AddTask onAdd = { addTask } />}

            <Tasks tasks = { tasks } 
            onDelete = { deleteTask }
            onToggle = { toggleRem } />
           
        
      </div>
  );
}

export default App;
