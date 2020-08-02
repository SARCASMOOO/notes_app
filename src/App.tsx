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
            {title: 'Hello', status: 'done', description: 'This is a task.', time: "2018-06-12T19:30", id: '1'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '2'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '3'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '4'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '5'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '6'},
            {title: 'Task3', status: 'done', description: 'This is a task.', time: "2018-06-12T19:30", id: '7'},
            {title: 'Task4', status: 'done', description: 'This is a task.', time: "2018-06-12T19:30", id: '8'},
            {title: 'Task1', status: 'done', description: 'This is a task.', time: "2018-06-12T19:30", id: '9'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '10'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '11'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '12'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '13'},
            {title: 'Task2', status: 'done', description: 'This is a task.', time: "2018-06-12T19:30", id: '14'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '15'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '16'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '17'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '18'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '19'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '20'},
            {title: 'Task1', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '21'},
            {title: 'Task2', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '22'},
            {title: 'Task3', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '23'},
            {title: 'Task4', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '24'},
            {title: 'Task5', status: 'started', description: 'This is a task.', time: "2018-06-12T19:30", id: '25'}]
    }

    setStatus = (id:number, status: string) => {
        let task;
        const newTasks = [...this.state.tasks];
        let index = 0;

        for (task of newTasks) {
            if(task.id === id.toString()) {
                newTasks[index].status = status;
                break;
            }
            index++;
        }

        this.setState({tasks: newTasks})
    }

    removeTask = (id:number) => {
        const newTasks = [...this.state.tasks];
        let task;
        let index = 0;
        for (task of newTasks) {
            if (task.id === id.toString()) {
                newTasks.splice(index, 1);
                break;
            }
            index++;
        }
        this.setState({tasks: newTasks});
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