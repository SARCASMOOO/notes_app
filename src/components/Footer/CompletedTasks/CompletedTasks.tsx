import React from "react";

// Models
import TaskModel, {TaskStatus} from "../../../models/TaskModel";

const completedTasks = ({tasks}: { tasks: TaskModel[] }) => {
    const finishedTasks = tasks.filter(task => task.status === TaskStatus.DONE).length;

    return (<>Completed: {finishedTasks}</>);
};

export default completedTasks;