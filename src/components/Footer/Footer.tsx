import React from 'react';
import {pure} from 'recompose';

// Models
import TaskModel, {TaskStatus} from "../../models/TaskModel";

// Components
import FooterItem from "./FooterItem/FooterItem";

import TotalTasks from './TotalTasks/TotalTasks';

import CompletedTasks from './CompletedTasks/CompletedTasks';

import AddTask from './AddTask/AddTask';

// Styles
import classes from './Footer.module.css';

// Interaces
interface Props { tasks: TaskModel[]; }

const Footer = (props: Props) => (
    <footer className={classes.Footer}>

        <FooterItem id='totalTasks'><TotalTasks tasks={props.tasks}/></FooterItem>

        <FooterItem id='completedTasks'><CompletedTasks tasks={props.tasks}/></FooterItem>

        <FooterItem id='addTask'><AddTask/></FooterItem>

    </footer>
);

export default pure(Footer);