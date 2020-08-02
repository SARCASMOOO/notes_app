import styles from './Footer.module.css';
import addIcon from '../../assets/images/add.svg';
import { pure } from 'recompose';

const React = require('react');

const Footer = (props: { tasks: any; }) => {
    let completedTasks = 0;
    let task;

    for(task of props.tasks) {
        if(task.status === 'done') {
            completedTasks++;
        }
    }

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