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

const Task = (props: Props) => {
    const updateShow = () => setShow(prevShow => !prevShow);

    const [show, setShow] = useState(false);

    return (<div className={classes.Task}>
        <div className={classes.TopRow}>
            <div className={classes.Info}>
                <div>{props.task.title}</div>
                <div>{props.task.time.toLocaleString()}</div>
            </div>
            <div className={classes.Button}><ChangeStatus id={props.task.id} status={props.task.status}
                                                          updateStatus={props.updateStatus}/></div>
            <div className={classes.Button}><Expand className={classes.Expand} updateShow={updateShow}/></div>
        </div>

        <div><MoreInfo time={props.task.time} description={props.task.description} show={show}/></div>
    </div>)
}


export default Task;

