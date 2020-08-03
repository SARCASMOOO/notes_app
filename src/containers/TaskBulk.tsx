import React, {useState} from "react";

import Draggable, {DraggableEventHandler} from 'react-draggable';
import MoreInfo from "./MoreInfo";

import styles from "../components/Tasks/Task/Task.module.css";


interface TaskBulkProps {
    title: string;
    time: string;
    description: string;
    showMoreInfo: boolean;

    removeAction: () => void;
}

function TaskBulk({title, time, description, showMoreInfo, removeAction}: TaskBulkProps) {
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


    return (
        <Draggable {...draggableSettings} onStop={onStop} bounds={{left: 0, right: (window.innerWidth * 0.80)}} axis='x'
                   onStart={onStart}>

            <div>
                <div className={styles.Task}>
                    <div>
                        <div>{title}</div>
                        <div>{time}</div>
                    </div>
                </div>
                {showMoreInfo ? <MoreInfo time={time} description={description}/> : null}
            </div>

        </Draggable>
    );
}

export default TaskBulk;