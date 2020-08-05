import React, {Component} from "react";

// Components
import Button from '../../../UI/Button/Button';

import TaskManager from "../../../containers/TaskManager";

// Styles
import styles from "./Task.module.css";

// Models
import TaskModel, {TaskStatus} from "../../../models/TaskModel";

interface Props {
    task: TaskModel;

    selected: boolean;

    setStatus: (id: string, status: TaskStatus) => void;

    removeAction: (task: TaskModel) => void;
}

const Task = () => {
    const markAsStarted = () => this.props.setStatus(this.props.task.id, TaskStatus.STARTED);

    const markAsDone = () => this.props.setStatus(this.props.task.id, TaskStatus.DONE);

    const removeTask = () => this.props.removeAction(this.props.task);

    const task = this.props.task;

    return (
            <div style={{display: 'flex', width: '100%'}} className={styles.TotalTask + " " + bkgColor}>
                <div className={styles.TaskContainer}>
                    <TaskManager task={task} showMoreInfo={this.state.showMoreInfo} removeAction={this.removeTask}/>
                </div>
                <div style={{display: 'flex'}}>
                    {markButton}
                    <Button type={ButtonType.MORE_INFO} onClick={this.showMore}/>
                </div>
            </div>);
}

export default Task;


import React, {useState} from "react";

import Draggable, {DraggableEventHandler} from 'react-draggable';
import MoreInfo from "../components/Tasks/Task/MoreInfo/MoreInfo";

import styles from "../components/Tasks/Task/Task.module.css";
import TaskModel, {TaskStatus} from "../models/TaskModel";


interface Props {
    task: TaskModel;
    showMoreInfo: boolean;
    removeAction: () => void;
}

function TaskManager({task, showMoreInfo, removeAction}: Props) {
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

    const initialState = {
        draggableSettings:
            {
                position: {x: 0, y: 0}
            }
    };
    const [draggableSettings, setDraggableSettings] = useState(initialState);

    const onStart: DraggableEventHandler = (event, data) => {
        setDraggableSettings(initialState);
    };

    const onStop: DraggableEventHandler = (event, data) => {
        console.log('Data x is: ' + data.lastX);
        console.log('window x is: ' + (window.innerWidth));

        if (data.lastX > (window.innerWidth / 2)) {
            removeAction();
            console.log('X is bigger then half the screen.');
        }
    };

    const rightOffset = (window.innerWidth * 0.80); // TODO: change when window changes

    return (
        <Draggable {...draggableSettings} onStop={onStop} bounds={{left: 0, right: rightOffset}} axis='x' onStart={onStart}>

            <div>
                <div className={styles.Task}>
                    <div>
                        <div>{task.title}</div>
                        <div>{task.time.toLocaleString()}</div>
                    </div>
                </div>
                {showMoreInfo ? <MoreInfo time={task.time} description={task.description}/> : null}
            </div>

        </Draggable>
    );
}

export default TaskManager;