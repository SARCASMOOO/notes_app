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
        <ChangeStatus id={props.task.id} status={props.task.status} updateStatus={props.updateStatus}/>
        <MoreInfo time={props.task.time} description={props.task.description} show={show}/>
        <Expand updateShow={updateShow} />
    </div>)
}


export default Task;

