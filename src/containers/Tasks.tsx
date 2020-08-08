import React, {Component, ReactNode} from 'react';

// Components
import Task from '../components/Tasks/Task/Task';

// Modals
import TaskModel, {TaskStatus} from "../models/TaskModel";

// Styles
import classes from './Tasks.module.css';

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
            {id: "1", title: "Hello2", description: "This is a task.", status: 1, time: time},
            {id: "2", title: "Hello2", description: "This is a task.", status: 1, time: time},
            {id: "3", title: "Hello2", description: "This is a task.", status: 1, time: time},
            {id: "4", title: "Hello2", description: "This is a task.", status: 1, time: time},
            {id: "5", title: "Hello2", description: "This is a task.", status: 1, time: time}];

        this.state = {tasks: tempTask};
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

    transformTasks = () => this.state.tasks.map(task => <Task key={task.id} task={task} />);

    render() {
        return (
            <div className={classes.Tasks}>
                {this.transformTasks()}
            </div>
        );
    }
}

export default Tasks;