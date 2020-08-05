interface TaskModel {
    id: string;

    status: TaskStatus;

    title: string;

    description: string;

    time: Date;
}

export enum TaskStatus {
    DONE,

    STARTED,

    OVERDUE
}

export default TaskModel;