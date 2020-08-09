import React from "react";

// Models
import TaskModel, {TaskStatus} from "../../../models/TaskModel";

const completedTasks = ({tasks}: { tasks: TaskModel[] }) =>
    <> Completed: {tasks.filter(task => task.status === TaskStatus.DONE).length}</>

export default completedTasks;