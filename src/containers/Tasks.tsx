import React, {Component, ReactNode} from 'react';

// Components
import Task from '../components/Tasks/Task/Task';

// Modals
import TaskModel, {TaskStatus} from "../models/TaskModel";

// Styles
import classes from './Tasks.module.css';
import styles from "../components/Tasks/Task/Task.module.css";

import './Map';

// Interfaces
interface Props {}

interface State { tasks: Map<string, TaskModel>; }

interface Tasks {
    addTask: () => number;

    getTasks: () => number;

    updateTask: () => number;

    removeTask: () => number;
}


// function identifiable(tasks: TaskModel[]) {
//     let map = new Map<string, TaskModel>();
//
//     tasks.forEach(task => map.set(task.id, task));
//
//     return map;
// }

function identifiable<T extends {id: string}>(array: T[]) {
    let map = new Map<string, T>();

    array.forEach(item => map.set(item.id, item));

    return map;
}



class Tasks extends Component< Props, State > {

    constructor(props: Props) {
        super(props);
        const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

        const time = new Date((new Date()).getTime() + MILLISECONDS_IN_DAY);
        const tempTask = [
            {id: "1", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "2", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "3", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "4", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "5", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time}];

        this.state = {tasks: identifiable(tempTask)};
    }

    updateStatus = (status: TaskStatus, id: string)  => {
        this.setState(prevState => {
            const copy = prevState.tasks.copy();

            const task = copy.get(id);
            if (task) task.status = status;

            return {tasks: copy};
        });
    }

    addTask = () => {
        console.log('Add Task');
        return 2;
    };

    getTasks = () => {
        console.log('Get Tasks');
        return 2;
    };

    updateTask = ()  => {
        console.log('Update Tasks');
        return 2;
    };

    removeTask = () => {
        console.log('Remove Task');
        return 2;
    };


    render() {
        const { tasks } = this.state;
        const taskList = tasks.map((id, task) => <Task key={id} task={task} updateStatus={this.updateStatus}/>);
        
        return (
            <main className={classes.Tasks}>
                {taskList}
            </main>
        );
    }
}

export default Tasks;