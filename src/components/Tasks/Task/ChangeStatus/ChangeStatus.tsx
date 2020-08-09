import React from "react";
// Components
import Button from "../../../../UI/Button/Button";

// Models
import {TaskStatus} from "../../../../models/TaskModel";

// SVG
import icon from '../../../../assets/images/finish.svg'
// Styles


// Interfaces
interface Props {
    status: TaskStatus;

    className?: string;

    updateStatus: (status: TaskStatus, id: string) => void;

    id: string;
}

const newStatus = (status: TaskStatus) => {
    console.log(status);
    switch (status) {
        case TaskStatus.DONE:
            return TaskStatus.STARTED;
        case TaskStatus.STARTED:
            return TaskStatus.DONE;
        default:
            return TaskStatus.STARTED;
    }
}

const ChangeStatus = ({className, status, updateStatus, id}: Props) =>
    <Button className={className} onClick={() => (updateStatus(newStatus(status), id))}>
        <img src={icon} alt='Mark task as finished.'/>
    </Button>

export default ChangeStatus;

