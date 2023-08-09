import React, {FC} from 'react';
import styles from './NewTask.module.css';
import {BiPlus} from "react-icons/bi";
import {Formik} from "formik";

interface Values {
    taskText: string
}
interface NewTaskProps {
    onSubmit: (values: Values) => void
}

const NewTask:FC<NewTaskProps> = ({onSubmit}) => {
    return (
        <Formik initialValues={{taskText: ''}} onSubmit={(values, {resetForm}) => {
            onSubmit(values)
            resetForm()
        }}>
            { ({values, handleSubmit, handleChange}) => (
                <form className={styles.addTask} onSubmit={handleSubmit}>
                    <button type={"submit"} className={styles.addTaskBtn}><BiPlus className={styles.addTaskIcon}/></button>
                    <input name={'taskText'} placeholder={'Add a task'} className={styles.addTaskText} value={values.taskText} onChange={handleChange}></input>
                </form>
            )}
        </Formik>
    );
};

export default NewTask;