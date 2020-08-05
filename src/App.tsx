import './assets/css/index.css';
import React, {Component} from 'react';

import Layout from './components/Layout/Layout'
import Nav from './containers/Nav'
import Footer from "./components/Footer/Footer";
import Tasks from './components/Tasks/Tasks';
import TaskModel, {TaskStatus} from "./models/TaskModel";


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