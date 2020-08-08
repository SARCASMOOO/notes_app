import React, {useState} from "react";

// Components
import Draggable, {DraggableEventHandler} from 'react-draggable';

import Button from '../../../UI/Button/Button';

import MoreInfo from './MoreInfo/MoreInfo';

// Styles
import styles from "./Task.module.css";

// Models
import TaskModel, {TaskStatus} from "../../../models/TaskModel";

// Interfaces
interface Props {
    task: TaskModel
}

const Task = (props: Props) => <h1>{props.task.title}</h1>;

export default Task;

