import React, {FC} from 'react';
import styles from './Tasks.module.css'
import Task from "./Task/Task";

interface taskProps {
    id: number;
    taskText: string;
    isCompleted: boolean;
}

interface Tasks {
    tasks: taskProps[],
    setIsCompleted: (id: number) => void,
    removeTask: (id: number) => void
}

const TasksList: FC<Tasks> = ({tasks, setIsCompleted, removeTask}) => {
    return (
            <div className={styles.tasksContainer}>
                {
                    tasks.map(task => <Task key={task.id} task={task} setIsCompleted={setIsCompleted} removeTask={removeTask}/>)
                }
            </div>
    );
};

export default TasksList;