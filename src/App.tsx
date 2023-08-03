import React, {useState} from 'react';
import './App.css';
import TasksList from "./components/Tasks/TasksList";

// type Task = {
//     id: number;
//     taskText: string;
//     isCompleted: boolean;
//     setIsCompleted: (id: number) => void
// }

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, taskText: 'Buy groceries', isCompleted: true},
        {id: 2, taskText: 'Make todo list app', isCompleted: false},
        {id: 3, taskText: 'Learn english', isCompleted: true}
    ])

    const setIsCompleted = (id: number) => {
       // tasks[id - 1].isCompleted = !tasks[id - 1].isCompleted
        const tasksNew = [...tasks]
        tasksNew[id - 1] = {...tasksNew[id - 1]}
        tasksNew[id - 1].isCompleted = !tasksNew[id - 1].isCompleted
        setTasks(tasksNew)
    }

    const removeTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
      <div className="App">
        <div className="appTitle">ToDo List</div>

        <TasksList tasks={tasks} setIsCompleted={setIsCompleted} removeTask={removeTask}/>
        <div className="add-task"></div>
      </div>
  );
}

export default App;
