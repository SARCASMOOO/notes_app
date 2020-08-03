import React, {useState} from "react";

import Draggable, {DraggableEventHandler} from 'react-draggable';
import MoreInfo from "./MoreInfo";

import styles from "../components/Tasks/Task/Task.module.css";
import {TaskModel} from "./Task";


interface TaskBulkProps {
    task: TaskModel;
    showMoreInfo: boolean;

    removeAction: () => void;
}

function TaskBulk({task, showMoreInfo, removeAction}: TaskBulkProps) {
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
                        <div>{task.time}</div>
                    </div>
                </div>
                {showMoreInfo ? <MoreInfo time={task.time} description={task.description}/> : null}
            </div>

        </Draggable>
    );
}

export default TaskBulk;