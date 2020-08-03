import styles from './Footer.module.css';
import addIcon from '../../assets/images/add.svg';
import {pure} from 'recompose';
import TaskModel, {TaskStatus} from "../../containers/TaskModel";

const React = require('react');



const Footer = (props: { tasks: TaskModel[]; }) => {
    const completedTasks = props.tasks.filter(task => task.status === TaskStatus.DONE).length;

    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterItem} id='totalTasks'>Total: {props.tasks.length}</div>
            <div className={styles.FooterItem} id='completedTasks'>Completed: {completedTasks}</div>
            <div className={styles.FooterItem} id='addTask'>
                <img style={{height: '1em', width: '1em'}} src={addIcon} alt=""/>
            </div>
        </footer>);
}

export default pure(Footer);