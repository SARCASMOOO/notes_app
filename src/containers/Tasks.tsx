import React, {Component, ReactNode} from 'react';

// Components
import Task from '../components/Tasks/Task/Task';

// Modals
import TaskModel, {TaskStatus} from "../models/TaskModel";

// Styles
import classes from './Tasks.module.css';
import styles from "../components/Tasks/Task/Task.module.css";

// Interfaces
interface Props {}

interface State { tasks: TaskModel[]; }

interface Tasks {
    addTask: () => number;

    getTasks: () => number;

    updateTask: () => number;

    removeTask: () => number;
}

class Tasks extends Component< Props, State > implements Tasks {
    constructor(props: Props) {
        super(props);
        const time = new Date((new Date()).getTime() + 24*60*60*1000);
        const tempTask = [
            {id: "1", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "2", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "3", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "4", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time},
            {id: "5", title: "Hello2", description: "This is a task.", status: TaskStatus.STARTED, time: time}];

        this.state = {tasks: tempTask};
    }

    updateStatus = (status: TaskStatus, id: string)  => {
        let tasks = [...this.state.tasks];

        tasks = tasks.filter((task) => task.id === id);

        if (tasks.length > 0) tasks[+id].status = status;

        this.setState({tasks: tasks});

        console.log('Update status for id: ' + id + ', and status of: ' + status);
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

    transformTasks = () => this.state.tasks.map(task => <Task key={task.id} task={task} updateStatus={this.updateStatus}/>);


    render() {
        return (
            <main className={classes.Tasks}>
                {this.transformTasks()}
            </main>
        );
    }
}

export default Tasks;