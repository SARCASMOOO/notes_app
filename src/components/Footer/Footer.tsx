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
import styles from './Footer.module.css';

const Footer = (props: { tasks: TaskModel[]; }) => (
    <footer className={styles.Footer}>
        <FooterItem id='totalTasks'><TotalTasks tasks={props.tasks}/></FooterItem>
        <FooterItem id='completedTasks'><CompletedTasks tasks={props.tasks}/></FooterItem>
        <FooterItem id='addTask'><AddTask/></FooterItem>
    </footer>
);

export default pure(Footer);