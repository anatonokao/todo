import React, {useState} from 'react';
import './App.css';
import TasksList from "./components/Tasks/TasksList";
import NewTask from "./components/NewTask/NewTask";

type Task = {
    id: number;
    taskText: string;
    isCompleted: boolean;
}

function App() {
    const localStorageData = JSON.parse(localStorage.getItem('tasks') || '[]')

    const [tasks, setTasks] = useState([...localStorageData])
    const setIsCompleted = (id: number) => {
        const tasksNew = tasks.map((item: Task) => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted
                return item
            }
            return item
        })
        setTasks(tasksNew)
    }
    const removeTask = (id: number) => {
        setTasks(tasks.filter((t: Task) => t.id !== id))
    }

    interface Values {
        taskText: string
    }

    const addTask = (value: Values) => {
        console.log(value)
        const id = tasks[tasks.length-1] ? tasks[tasks.length-1].id+1 : 1
        const newTask = {id, taskText: `${value.taskText}`, isCompleted: false}
        setTasks([...tasks, newTask])
    }


    localStorage.setItem('tasks', JSON.stringify(tasks))


    return (
      <div className="App">
        <div className="appTitle">ToDo List</div>
          <NewTask onSubmit={addTask} />
        <TasksList tasks={tasks} setIsCompleted={setIsCompleted} removeTask={removeTask}/>
        <div className="add-task"></div>
      </div>
  );
}

export default App;
