import React from "react";

// Components
import Button from "../../../../UI/Button/Button";
import {TaskStatus} from "../../../../models/TaskModel";
import styles from "../Task.module.css";

const markButton = () => {
    const isDone = task.status === TaskStatus.DONE;

    const bkgColor = isDone ? styles.Done : styles.NotDone;

    const startedButton = (<Button type={ButtonType.MARK_STARTED} onClick={this.markAsStarted}/>);

    const doneButton = (<Button className={ButtonType.MARK_DONE} onClick={this.markAsDone}/>);

    return (isDone ? doneButton : startedButton);
};




