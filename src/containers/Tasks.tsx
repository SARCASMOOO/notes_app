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

interface State { tasks: Map<string, TaskModel>; }

interface Tasks {
    addTask: () => number;

    getTasks: () => number;

    updateTask: () => number;

    removeTask: () => number;
}


function identifiable(tasks: TaskModel[]) {
    let map = new Map<string, TaskModel>();

    tasks.forEach(task => map.set(task.id, task));

    return map;
}

function mapForMap<K,V,T>(map: Map<K,V>, fn: (key: K, value: V) => T) {
    let result: T[] = [];

    map.forEach((value, key) => {
        result.push((fn(key, value)));
    });

    return result;
}

function copyMap<K, V>(map: Map<K, V>) {
    let newMap = new Map<K,V>();

    map.forEach((value, key) => newMap.set(key, value));

    return newMap;
}

// Map = 1 -> hello, 2 => world, 3 => steven (Map<number, string>)
// fn: (key, value) => `${key} ${value}`
// ['1 hello', '2 world', '3 steven']
//

class Tasks extends Component< Props, State > {

    constructor(props: Props) {
        super(props);
        const time = new Date((new Date()).getTime() + 24*60*60*1000);
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
            let copy = copyMap(prevState.tasks);

            let task = copy.get(id);
            if (task) {
                task.status = status;
                copy.set(id, task);
            }

            console.log(copy);
            return {tasks: copy};
        });

        // let tasks = [...this.state.tasks];
        //
        // tasks = tasks.filter((task) => task.id === id);
        //
        // if (tasks.length > 0) tasks[+id].status = status;
        //
        // this.setState({tasks: tasks});
        //
        // console.log('Update status for id: ' + id + ', and status of: ' + status);
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


    transformTasks = () => {
        const dictionary = this.state.tasks;
        return mapForMap(dictionary,(id, task) => <Task key={id} task={task} updateStatus={this.updateStatus}/>);
    }


    render() {
        return (
            <main className={classes.Tasks}>
                {this.transformTasks()}
            </main>
        );
    }
}

export default Tasks;