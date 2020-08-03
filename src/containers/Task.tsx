import React, {Component, Fragment, useState} from "react";

// Reusable
import Button from './Button';
import TaskBulk from "./TaskBulk";

// Style
import styles from "../components/Tasks/Task/Task.module.css";

// SVG
import doneIcon from "../assets/images/checkmark.svg";
import finishIcon from '../assets/images/finish.svg';
import moreIcon from '../assets/images/more.svg';



export interface TaskModel {
    id: string; // TODO: Make type number
    status: string;
    title: string;
    description: string;
    time: string; // TODO: Make it type date
}


interface Props {
    task: TaskModel;
    selected: boolean;

    setStatus: (id: string, status: string) => void;
    removeAction: (task: TaskModel) => void;
}

interface State {
    blockOnClick: boolean;
    showMoreInfo: boolean;
}



function DoneImage({onClick}: {onClick?: () => void}) {
    return (<img style={{paddingRight: '1em', paddingTop: '0.5em'}} onClick={onClick}
         className={styles.checkmark}
         src={doneIcon}
         alt=""/>);
}

class Task extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            blockOnClick: false,
            showMoreInfo: false
        }
    }




    private showMore = ()=> {
        this.setState(prevState => {
            return {
                showMoreInfo: !prevState.showMoreInfo
            }
        });
    };

    private markAsStarted = () => {
        this.props.setStatus(this.props.task.id, 'started');
    };

    private markAsDone = () => {
        this.props.setStatus(this.props.task.id, 'done');
    };

    render() {
        const {task, removeAction, setStatus} = this.props;
        const {status, id, time, title, description} = task;

        const tapStyle = status === 'done' ? styles.Done : styles.NotDone;

        return (
            <Fragment>
                <div style={{display: 'flex', width: '100%'}} className={styles.TotalTask}>
                    <div className={styles.TaskContainer}>
                        <TaskBulk title={title} time={time} description={description} showMoreInfo={this.state.showMoreInfo} status={status} removeAction={() => removeAction(task)}/>
                    </div>
                    <div style={{backgroundColor: '#E0FFE9', display: 'flex'}}>
                        {(status === 'done') ? <DoneImage onClick={this.markAsStarted} /> : null}
                        {(status !== 'done') ? <Button onClick={this.markAsDone} icon={finishIcon} className={tapStyle}/> : null}
                        <Button className={tapStyle} icon={moreIcon} onClick={ this.showMore } />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Task;


