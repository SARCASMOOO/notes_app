import React, {Component} from 'react';
import styles from '../components/Tasks/Tasks.module.css';
import Task from './Task';

class Tasks extends Component<any, any> {
    state = {
        selected: null
    }

    render() {
        let tasksWrapped = [...this.props.tasks];

        tasksWrapped = tasksWrapped.map((task) => (
            <Task title={task.title}
                  status={task.status}
                  description={task.description}
                  time={task.time}
                  id={task.id}
                  key={task.id}
                  selected={this.state.selected}
                  removeTask={this.props.removeTask}
                  setStatus={this.props.setStatus}
                  clicked={(id: any) => {
                      if (this.state.selected === id) {
                          id = null;
                      }
                      this.setState({
                          selected: id
                      });
                  }}/>
        ));

        return (
            <div className={styles.Tasks}>
                {tasksWrapped}
            </div>
        );
    }
}

export default Tasks;