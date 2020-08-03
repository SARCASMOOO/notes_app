interface TaskModel {
    id: string;
    status: TaskStatus;
    title: string;
    description: string;
    time: string; // TODO: Make it type date
}


export enum TaskStatus {
    DONE,
    STARTED,
    OVERDUE
}

export default TaskModel;