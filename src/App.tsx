import './assets/css/index.css';
import React, {Component} from 'react';

// Components
import Layout from './components/Layout/Layout'

import Nav from './containers/Nav'

import Footer from "./components/Footer/Footer";

import Tasks from './containers/Tasks';

const tasks = 3;

class App extends Component<{}, {}> {
    render() {
        const time = new Date((new Date()).getTime() + 24*60*60*1000);
        const tempTask = {id: "1", title: "Hello", description: "This is a task.", status: 1, time: time};

        return (
            <Layout>
                <Nav/>
                <main>
                    <Tasks/>
                </main>
                <Footer tasks={[tempTask]}/>
            </Layout>
        );
    }
}

export default App;