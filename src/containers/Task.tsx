import React, {Component} from "react";

// Reusable
import Button, {ButtonType} from './Button';
import TaskBulk from "./TaskBulk";

// Style
import styles from "../components/Tasks/Task/Task.module.css";
import TaskModel from "./TaskModel";


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

class Task extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            blockOnClick: false,
            showMoreInfo: false
        }
    }

    private showMore = () => {
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

    private removeTask = () => {
        this.props.removeAction(this.props.task);
    }

    render() {
        const task = this.props.task;
        const isDone = task.status === 'done';
        const bkgColor = isDone ? styles.Done : styles.NotDone;

        const markButton = isDone ? <Button type={ButtonType.MARK_STARTED} onClick={this.markAsStarted}/> :
            <Button type={ButtonType.MARK_DONE} onClick={this.markAsDone}/>;

        return (
            <div style={{display: 'flex', width: '100%'}} className={styles.TotalTask + " " + bkgColor}>
                <div className={styles.TaskContainer}>
                    <TaskBulk task={task} showMoreInfo={this.state.showMoreInfo} removeAction={this.removeTask}/>
                </div>
                <div style={{display: 'flex'}}>
                    {markButton}
                    <Button type={ButtonType.MORE_INFO} onClick={this.showMore}/>
                </div>
            </div>
        );
    }
}

export default Task;


