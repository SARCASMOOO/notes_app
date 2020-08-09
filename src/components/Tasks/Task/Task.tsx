import React, {useState} from "react";

// Components
import MoreInfo from './MoreInfo/MoreInfo';

import ChangeStatus from "./ChangeStatus/ChangeStatus";

import Expand from "./Expand/Expand";

// Styles
import classes from "./Task.module.css";

// Models
import TaskModel, {TaskStatus} from "../../../models/TaskModel";

// Interfaces
interface Props {
    task: TaskModel;
    updateStatus: (status: TaskStatus, id: string) => void;
}

const Task = ({task, updateStatus}: Props) => {
    const [show, setShow] = useState(false);

    return (<div className={classes.Task}>
        <div className={classes.TopRow}>
            <div className={classes.Info}>
                <div>{task.title}</div>
                <div>{task.time.toLocaleString()}</div>
            </div>
            <div className={classes.Button}><ChangeStatus id={task.id} status={task.status}
                                                          updateStatus={updateStatus}/></div>
            <div className={classes.Button}><Expand className={classes.Expand} updateShow={() => setShow(!show)}/></div>
        </div>

        <div><MoreInfo time={task.time} description={task.description} show={show}/></div>
    </div>)
}


export default Task;

