import React, {Component} from 'react';
import styles from './Tasks.module.css';
import Task from './Task/Task';
import TaskModel, {TaskStatus} from "../../models/TaskModel";

interface Props {
    tasks: TaskModel[];
    removeTask: (task: TaskModel) => void;
    setStatus: (id: string, status: TaskStatus) => void;
}

class Tasks extends Component< Props, State > {

    render() {
        const tasks = this.props.tasks;
        const {removeTask, setStatus} = this.props;

        const tasksList = tasks.map(task => <Task key={task.id} task={task} selected={false} removeAction={removeTask} setStatus={setStatus} /> );

        return (
            <div className={styles.Tasks}>
                {tasksList}
            </div>
        );
    }
}

export default Tasks;