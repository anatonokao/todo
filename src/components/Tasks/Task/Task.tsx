import React, {FC} from 'react';
import styles from './Task.module.css';
import {BsCheck2} from "react-icons/bs";
import {BiSolidTrash} from "react-icons/bi";

interface taskProps {
    id: number;
    taskText: string;
    isCompleted: boolean;
}

interface Tasks {
    task: taskProps,
    setIsCompleted: (id: number) => void,
    removeTask: (id: number) => void
}

const Task: FC<Tasks> = ({task, setIsCompleted, removeTask}) => {
    return (
        <div onClick={() => {setIsCompleted(task.id)}} className={styles.task  + ' ' + (task.isCompleted ? styles.checked : '')}>
            <BsCheck2 className={styles.checkIcon}/>
            <div className={styles.taskText}>{task.taskText}</div>
            <BiSolidTrash className={styles.trash} onClick={(e) => {
                e.stopPropagation();
                removeTask(task.id)
            }}/>
        </div>
    )
};

export default Task;