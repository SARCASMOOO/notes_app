import React from "react";

// Components
import Button from "../../../../UI/Button/Button";

import {TaskStatus} from "../../../../models/TaskModel";

// Models
// import ButtonType from "../../../../models/ButtonModel";

// Styles
import classes from "../Task.module.css";

// Interfaces
interface Props { status: TaskStatus; }

const ChangeStatus = (props: Props) => {
    // const isDone = props.status === TaskStatus.DONE;

    // const bkgColor = isDone ? classes.Done : classes.NotDone;

    // const startedButton = (<Button type={ButtonType.MARK_STARTED} onClick={() => updateStatus(TaskStatus.STARTED)}/>);
    // const doneButton = (<Button className={ButtonType.MARK_DONE} onClick={this.markAsDone}/>);

    // return (isDone ? doneButton : startedButton);\
    return <h1>Test</h1>;
};

export default ChangeStatus;



