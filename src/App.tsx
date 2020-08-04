import './assets/css/index.css';
import React, {Component} from 'react';

import Layout from './components/Layout/Layout'
import Nav from './containers/Nav'
import Footer from "./components/Footer/Footer";
import Tasks from './containers/Tasks';
import TaskModel, {TaskStatus} from "./containers/TaskModel";


//
// function map<T, C>(arr: T[], fn: (elem: T) => C): C[] {
//     let result: C[] = [];
//
//     for (let elem of arr) {
//         result.push(fn(elem));
//     }
//
//     return result;
// }
//
// let abc = [2, 3, 3, 5];
//
// map(abc, (elem) => elem * 2)
// map(abc, (elem) => true)

// map(abc, (elem)=> elem*2) => [4,6,6,10]
// map(abc, (elem) => `Hello ${elem}`)




// description: 'This is a task.', status: done | started | overdue

const randomDate = new Date("2018-06-12T19:30");

class App extends Component<{}, { tasks: TaskModel[] }> {
    private mockTasks: TaskModel[] = [
        {id: '1', title: 'Hello', description: 'This is a task.', status: TaskStatus.DONE, time: randomDate },
        {id: '2', title: 'Task2', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '3', title: 'Task3', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '4', title: 'Task4', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '5', title: 'Task1', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '6', title: 'Task2', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '7', title: 'Task3', description: 'This is a task.', status: TaskStatus.DONE, time: randomDate },
        {id: '8', title: 'Task4', description: 'This is a task.', status: TaskStatus.DONE, time: randomDate },
        {id: '9', title: 'Task1', description: 'This is a task.', status: TaskStatus.DONE, time: randomDate },
        {id: '10', title: 'Task2', description: 'Steven likes big dicks', status: TaskStatus.STARTED, time: randomDate },
        {id: '11', title: 'Task3', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '12', title: 'Task4', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '13', title: 'Task1', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '14', title: 'Task2', description: 'This is a task.', status: TaskStatus.DONE, time: randomDate },
        {id: '15', title: 'Task3', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '16', title: 'Task4', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '17', title: 'Task1', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '18', title: 'Task2', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '19', title: 'Task3', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '20', title: 'Task4', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '21', title: 'Task1', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '22', title: 'Task2', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '23', title: 'Task3', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '24', title: 'Task4', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate },
        {id: '25', title: 'Task5', description: 'This is a task.', status: TaskStatus.STARTED, time: randomDate }
    ];

    constructor(props: {}) {
        super(props);

        this.state = {tasks: this.mockTasks};
    }

    setStatus = (id: string, status: TaskStatus) => {
        this.setState((prevState) => {
            const prevTasks = [...prevState.tasks];

            prevTasks.map(task => {
                if (task.id === id)
                    task.status = status;

                return task;
            });

            return {tasks: prevTasks};
        });
    }


    removeTask = (task: TaskModel) => {
        this.setState((prevState) => {
            const prevTasks = [...prevState.tasks];

            return {tasks: prevTasks.filter(_task => !(_task.id === task.id))};
        });
    }

    render() {
        return (
            <Layout>
                <Nav/>
                <main>
                    <Tasks setStatus={this.setStatus}
                           removeTask={this.removeTask}
                           tasks={this.state.tasks}/>
                </main>
                <Footer tasks={this.state.tasks}/>
            </Layout>
        );
    }
}

export default App;