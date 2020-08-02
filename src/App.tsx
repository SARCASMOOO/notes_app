import './assets/css/index.css';
import Layout from './components/Layout/Layout'
import Nav from './containers/Nav'
import Footer from "./components/Footer/Footer";
import Tasks from './containers/Tasks';
import {Component} from "react";

const React = require('react');

class App extends Component<any, any> {
    state = {
        tasks: [
            {title: 'Task1', status: 'done', description: 'This is a task.', time: '2020:10:10:08:12', id: '1'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '2'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '3'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '4'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '5'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '6'},
            {title: 'Task3', status: 'done', description: 'This is a task.', time: '2020:10:10:08:12', id: '7'},
            {title: 'Task4', status: 'done', description: 'This is a task.', time: '2020:10:10:08:12', id: '8'},
            {title: 'Task1', status: 'done', description: 'This is a task.', time: '2020:10:10:08:12', id: '9'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '10'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '11'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '12'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '13'},
            {title: 'Task2', status: 'done', description: 'This is a task.', time: '2020:10:10:08:12', id: '14'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '15'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '16'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '17'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '18'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '19'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '20'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '21'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '22'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '23'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '24'},
            {title: 'Task5', status: 'started', description: 'This is a task.', time: '2020:10:10:08:12', id: '25'}]
    }

    render() {
        return (
            <Layout>
                <Nav/>
                <main>
                    <Tasks tasks={this.state.tasks}/>
                </main>
                <Footer tasks={this.state.tasks}/>
            </Layout>
        );
    }
}

export default App;