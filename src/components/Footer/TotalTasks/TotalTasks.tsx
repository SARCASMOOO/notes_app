import React from "react";

// Models
import TaskModel from "../../../models/TaskModel";

const taskCount = ({tasks}: {tasks: TaskModel[]}) => (<>Total: {tasks.length}</>);

export default taskCount;